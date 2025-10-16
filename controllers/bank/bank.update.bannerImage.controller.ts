import { Request, Response } from "express";
import { BANK } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";
import { generateRandomString } from "../../helpers/generate.random.string";
import { uploadObjectImage } from "../../helpers/upload.object.image";

export async function bankUpdateBannerImageController(req: Request, res: Response) {
    try {
        const { bankID } = req.body;

        // Find the bank first
        const bank = await BANK.findById(bankID);
        if (!bank) {
            return res.status(404).json({ message: responseMessages.BANK_NOT_FOUND });
        }

        // Ensure a file was uploaded
        if (!req.file) {
            return res.status(400).json({ message: "Banner image is required" });
        }

        // Upload new banner image
        const bannerImageObject = await uploadObjectImage(
            "bank-banner-image",
            generateRandomString(10),
            req.file.buffer,
            req.file.mimetype
        );

        // Update the bank with the new banner image
        const updatedBank = await BANK.findByIdAndUpdate(
            bankID,
            { bannerImage: bannerImageObject },
            { new: true }
        )

        return res.status(200).json({
            message: responseMessages.BANK_UPDATED,
            payload: updatedBank,
        });

    } catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
