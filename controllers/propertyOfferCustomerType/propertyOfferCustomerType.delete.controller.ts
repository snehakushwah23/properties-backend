import { Request, Response } from "express";
import { PROPERTY_OFFER_CUSTOMER_TYPE } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function propertyOfferCustomerTypeDeleteController(req: Request, res: Response) {
    try {
        const { propertyOfferCustomerTypeID } = req.body;

        const deletedOffer = await PROPERTY_OFFER_CUSTOMER_TYPE.findByIdAndDelete(propertyOfferCustomerTypeID);

        if (!deletedOffer) {
            return res.status(404).json({ message: "PROPERTY_OFFER_CUSTOMER_TYPE_NOT_FOUND" });
        }

        return res.status(200).json({ message: "PROPERTY_OFFER_CUSTOMER_TYPE_DELETED" });

    } catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
