import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { PROPERTY_OTHER_IMAGE } from "../../services/mongodb"

export async function propertyOtherImageUpdateController(req: Request, res: Response) {

    try {

        const {  title, propertyOtherImageID } = req.body

        const propertyOtherImage = await PROPERTY_OTHER_IMAGE.findById(propertyOtherImageID)

        if (!propertyOtherImage) {
            return res.status(404).json({ message: responseMessages.PROPERTY_OTHER_IMAGE_NOT_FOUND })
        }

        const updatedPropertyOtherImage = await PROPERTY_OTHER_IMAGE.findByIdAndUpdate(propertyOtherImageID, {title }, { new: true })

        return res.status(200).json({ message: responseMessages.PROPERTY_OTHER_IMAGE_UPDATED, payload: updatedPropertyOtherImage })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}