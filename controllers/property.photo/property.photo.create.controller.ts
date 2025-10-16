import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { PROPERTY_PHOTO } from "../../services/mongodb"
import { uploadObjectImage } from "../../helpers/upload.object.image"
import { generateRandomString } from "../../helpers/generate.random.string"

export async function propertyPhotoCreateController(req: Request, res: Response) {

    try {

        const { propertyID, title } = req.body

        const lastPhoto = await PROPERTY_PHOTO.findOne({ propertyID }).sort({ order: -1 });

        const newOrder = lastPhoto ? lastPhoto.order + 1 : 1;

        const propertyPhotoObject = await uploadObjectImage('property-photo', generateRandomString(10), req.file?.buffer, req.file?.mimetype)

        const createdPropertyOtherPhoto = await PROPERTY_PHOTO.create({ photo: propertyPhotoObject, propertyID, title, order: newOrder,})

        return res.status(201).json({ message: responseMessages.PROPERTY_PHOTO_CREATED, payload: createdPropertyOtherPhoto })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}