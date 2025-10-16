import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { PROPERTY_LINK } from "../../services/mongodb"

export async function propertyLinkGetController(req: Request, res: Response) {

    try {

        const { propertyLinkID } = req.query

        const propertyLink = await PROPERTY_LINK.findById(propertyLinkID)

        if (!propertyLink) {
            return res.status(404).json({ message: responseMessages.PROPERTY_LINK_NOT_FOUND })
        }

        return res.status(200).json({ message: responseMessages.PROPERTY_LINK_FETCHED, payload: propertyLink })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}