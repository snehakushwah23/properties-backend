import { Request, Response } from "express";
import { PROPERTY_OFFER_CUSTOMER_TYPE } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function propertyOfferCustomerTypeGetController(req: Request, res: Response) {
    try {
        const { propertyOfferCustomerTypeID } = req.query;

        const offer = await PROPERTY_OFFER_CUSTOMER_TYPE.findById(propertyOfferCustomerTypeID);

        if (!offer) {
            return res.status(404).json({ message: "PROPERTY_OFFER_CUSTOMER_TYPE_NOT_FOUND" });
        }

        return res.status(200).json({
            message: "PROPERTY_OFFER_CUSTOMER_TYPE_FETCHED",
            payload: offer
        });

    } catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
