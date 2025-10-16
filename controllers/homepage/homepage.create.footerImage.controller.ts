import { Request, Response } from "express";
import { HOME_PAGE } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";
import { uploadObjectImage } from "../../helpers/upload.object.image";
import { generateRandomString } from "../../helpers/generate.random.string";

export async function createFooterImageController(req: Request, res: Response) {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        const imageObject = await uploadObjectImage(
            "homepage-footer-image",
            generateRandomString(10),
            req.file.buffer,
            req.file.mimetype
        );

        const updatedHomepage = await HOME_PAGE.findOneAndUpdate(
            {},
            { footerImage: imageObject },
            { new: true, upsert: true }
        );

        return res.status(201).json({
            message: "Footer Image Created Successfully",
            payload: updatedHomepage,
        });

    } catch (err) {
        console.error("❌ ERROR in createFooterImageController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
