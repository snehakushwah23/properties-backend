import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { LINKED_PROPERTY } from "../../services/mongodb"

export async function likedPropertyDeleteController(req: Request, res: Response) {

    try {

        const { propertyID } = req.body
        
        const { accessToken } = (req as any)

        const isLikedPropertyExists = await LINKED_PROPERTY.findOne({ propertyID, customerID: accessToken.ID })

        if (!isLikedPropertyExists) {
            return res.status(404).json({ message: responseMessages.LINKED_PROPERTY_NOT_FOUND })
        }

        const deletedLikedProperty = await LINKED_PROPERTY.findByIdAndDelete(isLikedPropertyExists._id)

        return res.status(200).json({ message: responseMessages.LINKED_PROPERTY_DELETED, payload: deletedLikedProperty })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}