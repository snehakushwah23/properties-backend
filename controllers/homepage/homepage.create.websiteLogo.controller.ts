import { Request, Response } from "express";
import { HOME_PAGE } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";
import { uploadObjectImage } from "../../helpers/upload.object.image";
import { generateRandomString } from "../../helpers/generate.random.string";

export async function createWebsiteLogoController(req: Request, res: Response) {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        const imageObject = await uploadObjectImage(
            "website-logo",
            generateRandomString(10),
            req.file.buffer,
            req.file.mimetype
        );

        const updatedHomepage = await HOME_PAGE.findOneAndUpdate(
            {},
            { websiteLogo: imageObject },
            { new: true, upsert: true }
        );

        return res.status(201).json({
            message: "Website Logo Created Successfully",
            payload: updatedHomepage,
        });

    } catch (err) {
        console.error("❌ ERROR in createWebsiteLogoController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
