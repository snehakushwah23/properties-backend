import { Request, Response } from "express";
import { PROPERTY } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function propertySearchByCityController(req: Request, res: Response) {
    try {
        const { search = "", page = "1", limit = "10", order = "asc" } = req.query;

        const isValidNumber = (num: any) => !isNaN(num) && Number(num) > 0;

        const pageNumber = isValidNumber(page) ? Number(page) : 1;
        const limitNumber = isValidNumber(limit) ? Number(limit) : 10;
        const skip = (pageNumber - 1) * limitNumber;

        const filters: any = {};
        if (search) {
            filters.city = { $regex: new RegExp(search as string, "i") };
        }

        // Fetch hot properties and other properties separately
        const properties = await PROPERTY.aggregate([
            { $match: filters },
            {
                $facet: {
                    hotProperties: [
                        { $match: { isHotProperty: true } },
                        { $sort: { city: order === "asc" ? 1 : -1 } }
                    ],
                    otherProperties: [
                        { $match: { isHotProperty: { $ne: true } } },
                        { $sort: { city: order === "asc" ? 1 : -1 } },
                        { $skip: skip },
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

        return res.status(200).json({
            message: responseMessages.PROPERTY_FETCHED,
            payload: shuffledProperties,
            pagination: {
                page: pageNumber,
                limit: limitNumber
            }
        });

    } catch (err) {
        console.error("❌ ERROR in propertySearchByCityController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
