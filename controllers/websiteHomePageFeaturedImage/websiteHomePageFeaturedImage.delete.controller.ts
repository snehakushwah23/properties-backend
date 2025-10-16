import { Request, Response } from "express";
import { WEBSITE_HOME_PAGE_FEATURED_IMAGE } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";
import { deleteObject } from "../../helpers/delete.object"

export async function deleteWebsiteHomePageFeaturedImageController(req: Request, res: Response) {
    try {

        const { imageID } = req.body;

        const image = await WEBSITE_HOME_PAGE_FEATURED_IMAGE.findById(imageID);

        if (!image) {
            return res.status(404).json({ message: "Image not found" });
        }

        const deletedImage = await WEBSITE_HOME_PAGE_FEATURED_IMAGE.findByIdAndDelete(imageID);

        await deleteObject(deletedImage?.image.key)

        return res.status(200).json({ message: "Website featured image deleted successfully" , payload: image});

    } catch (err) {
        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
