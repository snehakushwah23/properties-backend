import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { LINKED_PROPERTY, PROPERTY } from "../../services/mongodb"

export async function likedPropertyCreateController(req: Request, res: Response) {

    try {

        const { propertyID } = req.body

        const { accessToken } = (req as any)

        const property = await PROPERTY.findById(propertyID)

        if (!property) {
            return res.status(404).json({ message: responseMessages.PROPERTY_NOT_FOUND })
        }

        const isLikedPropertyExist = await LINKED_PROPERTY.findOne({ customerID: accessToken.ID, propertyID })

        if (isLikedPropertyExist) {
            return res.status(409).json({ message: responseMessages.LINKED_PROPERTY_ALREADY_EXISTS })
        }

        const createdLikedProperty = await LINKED_PROPERTY.create({ customerID: accessToken.ID, propertyID })

        return res.status(200).json({ message: responseMessages.LINKED_PROPERTY_CREATED, payload: createdLikedProperty })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}