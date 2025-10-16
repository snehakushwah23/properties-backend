import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { PROPERTY_OTHER_IMAGE } from "../../services/mongodb"
import { deleteObject } from "../../helpers/delete.object"

export async function propertyOtherImageDeleteController(req: Request, res: Response) {

    try {

        const { propertyOtherImageID } = req.body

        const propertyOtherImage = await PROPERTY_OTHER_IMAGE.findById(propertyOtherImageID)

        if (!propertyOtherImage) {
            return res.status(404).json({ message: responseMessages.PROPERTY_OTHER_IMAGE_NOT_FOUND })
        }

        const deletedPropertyOtherImage = await PROPERTY_OTHER_IMAGE.findByIdAndDelete(propertyOtherImageID)

        await deleteObject(deletedPropertyOtherImage?.image.key)

        return res.status(200).json({ message: responseMessages.PROPERTY_OTHER_IMAGE_DELETED, payload: propertyOtherImage })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}