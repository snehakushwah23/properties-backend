import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { PROPERTY_OTHER_IMAGE } from "../../services/mongodb"

export async function propertyOtherImageGetController(req: Request, res: Response) {

    try {

        const { propertyOtherImageID } = req.query

        const propertyOtherImage = await PROPERTY_OTHER_IMAGE.findById(propertyOtherImageID)

        if (!propertyOtherImage) {
            return res.status(404).json({ message: responseMessages.PROPERTY_OTHER_IMAGE_NOT_FOUND })
        }
        
        return res.status(200).json({ message: responseMessages.PROPERTY_OTHER_IMAGE_FETCHED, payload: propertyOtherImage })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}