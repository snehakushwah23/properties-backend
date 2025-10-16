import { Request, Response } from "express";
import { WEBSITE_HOME_PAGE_FEATURED_IMAGE } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function getSliderImagesController(_req: Request, res: Response) {
    try {
        const sliderImages = await WEBSITE_HOME_PAGE_FEATURED_IMAGE.find({}, { image: 1 });

        return res.status(200).json({
            message: "Slider Images Retrieved Successfully",
            payload: sliderImages
        });

    } catch (err) {
        console.error("❌ ERROR in getSliderImagesController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
