import { Request, Response } from "express";
import { responseMessages } from "../../constants/response.messages";
import { CUSTOMER_TYPE } from "../../services/mongodb";

export async function customerTypeUpdateIsSpecialController(req: Request, res: Response) {
    try {
        const { customerTypeID, isSpecial } = req.body;

        if (!customerTypeID || typeof isSpecial !== "boolean") {
            return res.status(400).json({ message: "customerTypeID and isSpecial (boolean) are required" });
        }

        const updatedCustomerType = await CUSTOMER_TYPE.findByIdAndUpdate(
            customerTypeID,
            { isSpecial },
            { new: true }
        );

        if (!updatedCustomerType) {
            return res.status(404).json({ message: responseMessages.CUSTOMER_TYPE_NOT_FOUND });
        }

        return res.status(200).json({
            message: "Customer Type updated successfully",
            payload: updatedCustomerType
        });

    } catch (err) {
        console.error("ERROR in customerTypeUpdateIsSpecialController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
