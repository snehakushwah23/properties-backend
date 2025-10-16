import { Request, Response } from "express";
import { PROPERTY_OFFER_CUSTOMER_TYPE } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function propertyOfferCustomerTypeUpdateController(req: Request, res: Response) {
    try {
        const { propertyOfferCustomerTypeID, title, description, offer, endDate } = req.body;

        const updatedOffer = await PROPERTY_OFFER_CUSTOMER_TYPE.findByIdAndUpdate(
            propertyOfferCustomerTypeID,
            { title, description, offer, endDate },
            { new: true }
        );

        if (!updatedOffer) {
            return res.status(404).json({ message: "PROPERTY_OFFER_CUSTOMER_TYPE_NOT_FOUND" });
        }

        return res.status(200).json({
            message: "PROPERTY_OFFER_CUSTOMER_TYPE_UPDATED",
            payload: updatedOffer
        });

    } catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
