import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { PROPERTY_PHOTO } from "../../services/mongodb"
import { deleteObject } from "../../helpers/delete.object"

export async function propertyPhotoDeleteController(req: Request, res: Response) {

    try {

        const { propertyPhotoID } = req.body

        const propertyPhoto = await PROPERTY_PHOTO.findById(propertyPhotoID)

        if (!propertyPhoto) {
            return res.status(404).json({ message: responseMessages.PROPERTY_PHOTO_NOT_FOUND })
        }

        const deletedPropertyPDF = await PROPERTY_PHOTO.findByIdAndDelete(propertyPhotoID)

        await deleteObject(deletedPropertyPDF?.photo.key)

        return res.status(200).json({ message: responseMessages.PROPERTY_PHOTO_DELETED, payload: propertyPhoto })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}

