import { Request, Response } from "express";
import { CITY_FEATURED_IMAGE } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";
import { deleteObject } from "../../helpers/delete.object";

export async function deleteCityFeaturedImageController(req: Request, res: Response) {
    try {
        
        const { imageID } = req.body;

        const image = await CITY_FEATURED_IMAGE.findById(imageID);

        if (!image) {
            return res.status(404).json({ message: responseMessages.IMAGE_NOT_FOUND });
        }

        const deletedImage = await CITY_FEATURED_IMAGE.findByIdAndDelete(imageID);

        await deleteObject(deletedImage?.image.key)

        return res.status(200).json({ message: responseMessages.IMAGE_DELETED, payload: image });

    } catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
