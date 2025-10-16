import { Request, Response } from "express";
import { HOME_PAGE } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function createPhoneNumberAndLinksController(req: Request, res: Response) {
    try {
        const { phoneNumber, appStoreLink, googlePlayStoreLink } = req.body;

        const updatedEntry = await HOME_PAGE.findOneAndUpdate(
            {},
            { phoneNumber, appStoreLink, googlePlayStoreLink }, 
            { new: true, upsert: true } 
        );

        return res.status(200).json({
            message: "Phone Number & Links Updated Successfully",
            payload: updatedEntry
        });

    } catch (err) {
        console.error("❌ ERROR in createPhoneNumberAndLinksController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
