import { Request, Response } from "express";
import { PROPERTY } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function propertyGetListByMultipleFilterController(req: Request, res: Response) {
    try {
        const { propertyType, projectStatus, propertyTier, propertyOptions, propertyVariation, sroPromoter, bankAPFBankNames, city, plotArea, region, limit = 10, page = 1 } = req.query;

        const filters: any = {};

        if (propertyType) filters.propertyType = propertyType;
        if (projectStatus) filters.projectStatus = projectStatus;
        if (propertyTier) filters.propertyTier = propertyTier;
        if (propertyOptions) filters.propertyOptions = propertyOptions;
        if (propertyVariation) filters.propertyVariation = propertyVariation;
        if (sroPromoter) filters.sroPromoter = sroPromoter;
        if (bankAPFBankNames) filters.bankAPFBankNames = bankAPFBankNames;
        if (city) filters.city = city;
        if (region) filters.region = region;
        if (plotArea) filters.plotArea = Number(plotArea);

        const properties = await PROPERTY.find(filters)
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));

        return res.status(200).json({
            message: "Properties retrieved successfully",
            payload: properties
        });

    } catch (err) {
        console.error("❌ ERROR in propertyGetListByMultipleFilterController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
