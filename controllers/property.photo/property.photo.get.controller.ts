import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { PROPERTY_PHOTO } from "../../services/mongodb"

export async function propertyPhotoGetController(req: Request, res: Response) {

    try {

        const { propertyPhotoID } = req.query

        const propertyPhoto = await PROPERTY_PHOTO.findById(propertyPhotoID)

        if (!propertyPhoto) {
            return res.status(404).json({ message: responseMessages.PROPERTY_PHOTO_NOT_FOUND })
        }
        
        return res.status(200).json({ message: responseMessages.PROPERTY_PHOTO_FETCHED, payload: propertyPhoto })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}