import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { PROPERTY_OFFER } from "../../services/mongodb"

export async function propertyOfferDeleteController(req: Request, res: Response) {

    try {

        const { propertyOfferID } = req.body

        const propertyOffer = await PROPERTY_OFFER.findById(propertyOfferID)

        if (!propertyOffer) {
            return res.status(404).json({ message: responseMessages.PROPERTY_OFFER_NOT_FOUND })
        }

        const deletedPropertyOffer = await PROPERTY_OFFER.findByIdAndDelete(propertyOfferID)

        return res.status(200).json({ message: responseMessages.PROPERTY_OFFER_DELETED, payload: deletedPropertyOffer })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}