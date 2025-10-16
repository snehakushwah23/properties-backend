import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { PROPERTY_OFFER_IMAGE } from "../../services/mongodb"

export async function propertyOfferImageGetController(req: Request, res: Response) {

    try {

        const { propertyOfferImageID } = req.query

        const propertyOfferImage = await PROPERTY_OFFER_IMAGE.findById(propertyOfferImageID)

        if (!propertyOfferImage) {
            return res.status(404).json({ message: "PROPERTY_OFFER_IMAGE_NOT_FOUND" })
        }
        
        return res.status(200).json({ message: "PROPERTY_OFFER_IMAGE_FETCHED", payload: propertyOfferImage })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}