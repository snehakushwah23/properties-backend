import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { PROPERTY_OFFER_IMAGE } from "../../services/mongodb"

export async function propertyOfferImageUpdateController(req: Request, res: Response) {

    try {

        const {  title, propertyOfferImageID } = req.body

        const propertyOfferImage = await PROPERTY_OFFER_IMAGE.findById(propertyOfferImageID)

        if (!propertyOfferImage) {
            return res.status(404).json({ message: "PROPERTY_OFFER_IMAGE_NOT_FOUND" })
        }

        const updatedPropertyOfferImage = await PROPERTY_OFFER_IMAGE.findByIdAndUpdate(propertyOfferImageID, {title }, { new: true })

        return res.status(200).json({ message: "PROPERTY_OFFER_IMAGE_UPDATED", payload: updatedPropertyOfferImage })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}