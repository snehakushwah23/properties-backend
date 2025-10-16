import { Request, Response } from "express";
import { CITY_FEATURED_IMAGE } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";
import { uploadObjectImage } from "../../helpers/upload.object.image";
import { generateRandomString } from "../../helpers/generate.random.string";

export async function createCityFeaturedImageController(req: Request, res: Response) {
    try {

        const imageObject = await uploadObjectImage('city-featured-image', generateRandomString(10), req.file?.buffer, req.file?.mimetype);

        const createdImage = await CITY_FEATURED_IMAGE.create({ image: imageObject, cityID: req.body.cityID });

        return res.status(201).json({
            message: responseMessages.PROPERTY_PHOTO_CREATED,
            payload: createdImage,
        });
    } catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
