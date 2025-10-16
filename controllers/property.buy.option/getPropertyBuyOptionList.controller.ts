import { Request, Response } from "express";
import { responseMessages } from "../../constants/response.messages";
import { PROPERTY_BUY_OPTION } from "../../services/mongodb";

export async function getPropertyBuyOptionListController(req: Request, res: Response) {
    try {
        const { propertyID } = req.query;

        if (!propertyID) {
            return res.status(400).json({ message: responseMessages.PROPERTY_BUY_OPTION_NOT_FOUND });
        }

        const propertyBuyOptions = await PROPERTY_BUY_OPTION.find({ propertyID });

        if (!propertyBuyOptions.length) {
            return res.status(404).json({ message: responseMessages.PROPERTY_BUY_OPTION_NOT_FOUND });
        }

        return res.status(200).json({
            message: responseMessages.PROPERTY_BUY_OPTION_LIST_FETCHED,
            payload: propertyBuyOptions
        });

    } catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
