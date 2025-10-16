import { Request, Response } from "express";
import { PROPERTY_OFFER_CUSTOMER_TYPE } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function propertyOfferCustomerTypeGetListController(req: Request, res: Response) {
    try {
        const { propertyID } = req.query;

        const offers = await PROPERTY_OFFER_CUSTOMER_TYPE.find({ propertyID });

        return res.status(200).json({
            message: "PROPERTY_OFFER_CUSTOMER_TYPE_LIST_FETCHED",
            payload: offers
        });

    } catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
