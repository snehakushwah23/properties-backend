import { Request, Response } from "express";
import { ASSOCIATE_IMAGE } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function getAssociateImageController(req: Request, res: Response) {
    try {

        const { imageID } = req.query;

        const image = await ASSOCIATE_IMAGE.findById(imageID);

        if (!image) {
            return res.status(404).json({ message: "Image not found" });
        }

        return res.status(200).json({
            message: "Associate image retrieved successfully",
            payload: image
        });

    } catch (err) {
        console.error("ERROR:" + __filename);
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
