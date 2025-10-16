import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { PROPERTY_OFFER } from "../../services/mongodb"

export async function propertyOfferCreateController(req: Request, res: Response) {

    try {

        const { description, offer, propertyID, title } = req.body

        const createdPropertyOffer = await PROPERTY_OFFER.create({ description, offer, propertyID, title })

        return res.status(200).json({ message: responseMessages.PROPERTY_OFFER_CREATED, payload: createdPropertyOffer })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}