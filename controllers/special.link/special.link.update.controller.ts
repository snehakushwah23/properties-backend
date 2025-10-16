import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { SPECIAL_LINK } from "../../services/mongodb"

export async function specialLinkUpdateController(req: Request, res: Response) {

    try {

        const { link, title, description, specialLinkID } = req.body

        const propertyLink = await SPECIAL_LINK.findById(specialLinkID)

        if (!propertyLink) {
            return res.status(404).json({ message: "SPECIAL_LINK_NOT_FOUND" })
        }

        const updatedLink = await SPECIAL_LINK.findByIdAndUpdate(specialLinkID, { link,title,description }, { new: true })

        return res.status(200).json({ message: "SPECIAL_LINK_UPDATED", payload: updatedLink })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}