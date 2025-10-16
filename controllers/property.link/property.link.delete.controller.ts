import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { PROPERTY_LINK } from "../../services/mongodb"

export async function propertyLinkDeleteController(req: Request, res: Response) {

    try {

        const { propertyLinkID } = req.body

        const propertyLink = await PROPERTY_LINK.findById(propertyLinkID)

        if (!propertyLink) {
            return res.status(404).json({ message: responseMessages.PROPERTY_LINK_NOT_FOUND })
        }

        const deletedPropertyLink = await PROPERTY_LINK.findByIdAndDelete(propertyLinkID)

        return res.status(200).json({ message: responseMessages.PROPERTY_LINK_DELETED, payload: deletedPropertyLink })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}