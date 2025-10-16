import { Request, Response } from "express";
import { PROPERTY, BANK } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function propertyGetByFilterCompressedController(req: Request, res: Response) {
    try {
        const { propertyType, projectStatus, propertyTier, propertyOptions, propertyVariation, sroPromoter, bankAPFBankNames, city, region, limit, page } = req.query;

        // Function to validate and clean parameters
        const isValidFilter = (param: any) => param && param !== "undefined" && param !== "null";

        // Handle city validation
        if (!isValidFilter(city) && city!== "All") {
            return res.status(200).json({
                message: "City parameter is required to fetch properties.",
                payload: []
            });
        }

        const hasAdditionalFilters = [
            propertyType, projectStatus, propertyTier, propertyOptions, 
            propertyVariation, sroPromoter, bankAPFBankNames, region
        ].some(param => isValidFilter(param));
        
        if (!hasAdditionalFilters) {
            return res.status(200).json({
                message: "At least one additional filter must be selected.",
                payload: []
            });
        }

        const filters: any = {};

        if (city !== "All") {
            filters.city = city;
        }

        const convertToInArray = (param: any) => {
            if (!isValidFilter(param)) return []; 
            const array = Array.isArray(param) ? param : String(param).split(",");
            return array.filter(value => isValidFilter(value));
        };

        if (propertyType) filters.propertyType = { $all: convertToInArray(propertyType) };
        if (projectStatus) filters.projectStatus = { $all: convertToInArray(projectStatus) };
        if (propertyTier) filters.propertyTier = { $all: convertToInArray(propertyTier) };
        if (propertyOptions) filters.propertyOptions = { $all: convertToInArray(propertyOptions) };
        if (propertyVariation) filters.propertyVariation = { $all: convertToInArray(propertyVariation) };
        if (sroPromoter) filters.sroPromoter = { $all: convertToInArray(sroPromoter) };
        if (region) filters.region = region;

        if (bankAPFBankNames) {
            const bankNamesArray = convertToInArray(bankAPFBankNames);

            const regexBankNames = bankNamesArray.map(name =>
                new RegExp(`^${name.trim().replace(/\s+/g, "\\s+")}$`, "i")
            );

            const banks = await BANK.find({ name: { $in: regexBankNames } }, "_id");
            const bankIds = banks.map(bank => bank._id);

            if (bankIds.length > 0) {
                filters.bankAPFBankNames = { $all: bankIds };
            }
        }

        const pageNumber = Number(page) > 0 ? Number(page) : 1;
        const limitNumber = Number(limit) > 0 ? Number(limit) : 10;
        const skip = (pageNumber - 1) * limitNumber;

        const properties = await PROPERTY.aggregate([
            {
                $facet: {
                    hotProperties: [
                        { $match: filters },
                        { $match: { isHotProperty: true } }
                    ],
                    otherProperties: [
                        { $match: filters }, 
                        { $match: { isHotProperty: { $ne: true } } },
                        { $skip: skip },  // Apply pagination
                        { $limit: limitNumber }
                    ]
                }
            }
        ]);        

        const shuffleArray = (array: any[]) => array.sort(() => Math.random() - 0.5);

        let hotProperties = properties.length ? properties[0].hotProperties : [];
        let otherProperties = properties.length ? properties[0].otherProperties : [];

        hotProperties = shuffleArray(hotProperties);
        otherProperties = shuffleArray(otherProperties);

        const shuffledProperties = [...hotProperties, ...otherProperties];

        const finalProperties = shuffledProperties.slice(0, limitNumber);

        if (finalProperties.length === 0) {
            return res.status(200).json({
                success: false,
                message: "No properties found matching the given filters.",
                payload: []
            });
        }

        return res.status(200).json({
            success: true,
            message: responseMessages.PROPERTY_FETCHED,
            payload: finalProperties,
            pagination: {
                page: pageNumber,
                limit: limitNumber
            }
        });

    } catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
