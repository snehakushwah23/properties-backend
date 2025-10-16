import { Request, Response } from "express";
import { CITY_FEATURED_IMAGE } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function updateCityFeaturedImageTitleController(req: Request, res: Response) {
  try {
    const { cityFeaturedImageID, title } = req.body;

    if (!cityFeaturedImageID) {
      return res.status(400).json({ error: "CITY_FEATURED_IMAGE_ID_REQUIRED" });
    }

    if (!title) {
        return res.status(400).json({error: "TITLE_REQUIRED"});
    }

    const updatedImage = await CITY_FEATURED_IMAGE.findOneAndUpdate(
      { _id: cityFeaturedImageID },
      { title: title },
      { new: true }
    );

    if (!updatedImage) {
        return res.status(404).json({ error: "IMAGE_NOT_FOUND" });
    }
  
    return res.status(200).json({
        message: responseMessages.PROPERTY_PHOTO_UPDATED,
        payload: updatedImage,
    });
  } catch (err) {
    console.error("❌ ERROR in upsertCityFeaturedImageTitleController:", err);
    return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
  }
}