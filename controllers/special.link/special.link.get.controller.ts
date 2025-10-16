import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { SPECIAL_LINK } from "../../services/mongodb"

export async function specialLinkGetController(req: Request, res: Response) {

    try {

        const { specialLinkID } = req.query

        const propertyLink = await SPECIAL_LINK.findById(specialLinkID)

        if (!propertyLink) {
            return res.status(404).json({ message: "SPECIAL_LINK_NOT_FOUND" })
        }

        return res.status(200).json({ message: "SPECIAL_LINK_FETCHED", payload: propertyLink })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}