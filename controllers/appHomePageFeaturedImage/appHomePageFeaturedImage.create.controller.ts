import { Request, Response } from "express";
import { APP_HOME_PAGE_FEATURED_IMAGE } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";
import { uploadObjectImage } from "../../helpers/upload.object.image"
import { generateRandomString } from "../../helpers/generate.random.string"

export async function createAppHomePageFeaturedImageController(req: Request, res: Response) {
    try {
        
        const imageObject = await uploadObjectImage('app-home-page-featured-image', generateRandomString(10), req.file?.buffer, req.file?.mimetype)
        
        const createdImage = await APP_HOME_PAGE_FEATURED_IMAGE.create({ image: imageObject });

        return res.status(201).json({
            message: "Featured image created successfully",
            payload: createdImage
        });

    } catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
