import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { PROPERTY_VIDEO } from "../../services/mongodb"
import { deleteObject } from "../../helpers/delete.object"

export async function propertyVideoDeleteController(req: Request, res: Response) {

    try {

        const { propertyVideoID } = req.body

        const propertyVideo = await PROPERTY_VIDEO.findById(propertyVideoID)

        if (!propertyVideo) {
            return res.status(404).json({ message: responseMessages.PROPERTY_VIDEO_NOT_FOUND })
        }

        const deletedPropertyPDF = await PROPERTY_VIDEO.findByIdAndDelete(propertyVideoID)

        await deleteObject(propertyVideo?.video.Key)

        return res.status(200).json({ message: responseMessages.PROPERTY_VIDEO_DELETED, payload: deletedPropertyPDF })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}