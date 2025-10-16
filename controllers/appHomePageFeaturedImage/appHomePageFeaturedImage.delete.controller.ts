import { Request, Response } from "express";
import { APP_HOME_PAGE_FEATURED_IMAGE } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";
import { deleteObject } from "../../helpers/delete.object"

export async function deleteAppHomePageFeaturedImageController(req: Request, res: Response) {
    try {
        const { imageID } = req.body;

        const image = await APP_HOME_PAGE_FEATURED_IMAGE.findById(imageID);

        if (!image) {
            return res.status(404).json({ message: "Image not found" });
        }

        const deletedImage = await APP_HOME_PAGE_FEATURED_IMAGE.findByIdAndDelete(imageID);

        await deleteObject(deletedImage?.image.key)

        return res.status(200).json({ message: "Featured image deleted successfully" , payload: image });

    } catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
