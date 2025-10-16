import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { PROPERTY_OFFER_IMAGE } from "../../services/mongodb"
import { deleteObject } from "../../helpers/delete.object"

export async function propertyOfferImageDeleteController(req: Request, res: Response) {

    try {

        const { propertyOfferImageID } = req.body

        const propertyOfferImage = await PROPERTY_OFFER_IMAGE.findById(propertyOfferImageID)

        if (!propertyOfferImage) {
            return res.status(404).json({ message: responseMessages.PROPERTY_OTHER_IMAGE_NOT_FOUND })
        }

        const deletedPropertyOfferImage = await PROPERTY_OFFER_IMAGE.findByIdAndDelete(propertyOfferImageID)

        await deleteObject(deletedPropertyOfferImage?.image.key)

        return res.status(200).json({ message: "PROPERTY OFFER IMAGE DELETED", payload: propertyOfferImage })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}