import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { PROPERTY_VIDEO } from "../../services/mongodb"

export async function propertyVideoUpdateController(req: Request, res: Response) {

    try {

        const {  title, propertyVideoID } = req.body

        const propertyVideo = await PROPERTY_VIDEO.findById(propertyVideoID)

        if (!propertyVideo) {
            return res.status(404).json({ message: responseMessages.PROPERTY_VIDEO_NOT_FOUND })
        }

        const updatedPropertyVideo = await PROPERTY_VIDEO.findByIdAndUpdate(propertyVideoID, {title}, { new: true })

        return res.status(200).json({ message: responseMessages.PROPERTY_VIDEO_UPDATED, payload: updatedPropertyVideo })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}