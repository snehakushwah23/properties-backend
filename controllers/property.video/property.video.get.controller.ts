import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { PROPERTY_VIDEO } from "../../services/mongodb"

export async function propertyVideoGetController(req: Request, res: Response) {

    try {

        const { propertyVideoID } = req.query

        const propertyVideo = await PROPERTY_VIDEO.findById(propertyVideoID)

        if (!propertyVideo) {
            return res.status(404).json({ message: responseMessages.PROPERTY_VIDEO_NOT_FOUND })
        }
        
        return res.status(200).json({ message: responseMessages.PROPERTY_VIDEO_FETCHED, payload: propertyVideo })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}