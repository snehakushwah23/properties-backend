import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { PROPERTY_PHOTO } from "../../services/mongodb"

export async function propertyPhotoUpdateController(req: Request, res: Response) {

    try {

        const {  title, propertyPhotoID } = req.body

        const propertyPhoto = await PROPERTY_PHOTO.findById(propertyPhotoID)

        if (!propertyPhoto) {
            return res.status(404).json({ message: responseMessages.PROPERTY_PHOTO_NOT_FOUND })
        }

        const updatedPropertyPhoto = await PROPERTY_PHOTO.findByIdAndUpdate(propertyPhotoID, {title}, { new: true })

        return res.status(200).json({ message: responseMessages.PROPERTY_PHOTO_UPDATED, payload: updatedPropertyPhoto })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}