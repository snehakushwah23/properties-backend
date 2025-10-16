import { Request, Response } from "express";
import { HOME_PAGE } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function updateFooterAndQrCodeStatusController(req: Request, res: Response) {
    try {
        const { footerImageStatus, qrCodeStatus } = req.body;

        // Validate request
        if (typeof footerImageStatus !== "boolean" || typeof qrCodeStatus !== "boolean") {
            return res.status(400).json({ message: "Invalid data. Both footerImageStatus and qrCodeStatus must be boolean values." });
        }

        // Update the status fields
        const updatedHomepage = await HOME_PAGE.findOneAndUpdate(
            {},
            { footerImageStatus, qrCodeStatus },
            { new: true, upsert: true }
        );

        return res.status(200).json({
            message: "Footer and QR Code Status Updated Successfully",
            payload: updatedHomepage
        });

    } catch (err) {
        console.error("❌ ERROR in updateFooterAndQrCodeStatusController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
