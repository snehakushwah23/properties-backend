import { Request, Response } from "express";
import { responseMessages } from "../../constants/response.messages";
import { PROPERTY_OFFER } from "../../services/mongodb";

export async function getPropertyOfferListController(req: Request, res: Response) {
    try {
        const { propertyID } = req.query;

        if (!propertyID) {
            return res.status(400).json({ message: "Invalid ID" });
        }

        const propertyOffers = await PROPERTY_OFFER.find({ propertyID });

        if (!propertyOffers.length) {
            return res.status(404).json({ message: responseMessages.PROPERTY_OFFER_NOT_FOUND });
        }

        return res.status(200).json({
            message: responseMessages.PROPERTY_OFFER_LIST_FETCHED,
            payload: propertyOffers
        });

    } catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
