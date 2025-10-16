import { Request, Response } from "express";
import { PROPERTY_OFFER_CUSTOMER_TYPE } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function propertyOfferCustomerTypeCreateController(req: Request, res: Response) {
    try {
        const { title, description, offer, endDate, propertyID, customerTypeID } = req.body;

        const newOffer = await PROPERTY_OFFER_CUSTOMER_TYPE.create({
            title,
            description,
            offer,
            endDate,
            propertyID,
            customerTypeID
        });

        return res.status(201).json({
            message: "PROPERTY OFFER CUSTOMER TYPE CREATED",
            payload: newOffer
        });

    } catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
