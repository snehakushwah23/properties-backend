import { Request, Response } from "express";
import { ASSOCIATE_IMAGE } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";
import { uploadObjectImage } from "../../helpers/upload.object.image"
import { generateRandomString } from "../../helpers/generate.random.string"

export async function createAssociateImageController(req: Request, res: Response) {
    try {

        const imageObject = await uploadObjectImage('associate-image', generateRandomString(10), req.file?.buffer, req.file?.mimetype)

        const createdImage = await ASSOCIATE_IMAGE.create({ image: imageObject });

        return res.status(201).json({
            message: "Associate image created successfully",
            payload: createdImage
        });

    } catch (err) {
        
        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
