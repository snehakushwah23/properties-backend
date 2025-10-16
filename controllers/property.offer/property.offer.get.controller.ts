import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { PROPERTY_OFFER } from "../../services/mongodb"

export async function propertyOfferGetController(req: Request, res: Response) {

    try {

        const { propertyOfferID } = req.query

        const propertyOffer = await PROPERTY_OFFER.findById(propertyOfferID)

        if (!propertyOffer) {
            return res.status(404).json({ message: responseMessages.PROPERTY_OFFER_NOT_FOUND })
        }

        return res.status(200).json({ message: responseMessages.PROPERTY_OFFER_FETCHED, payload: propertyOffer })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}