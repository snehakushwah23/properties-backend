import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { SPECIAL_LINK } from "../../services/mongodb"

export async function specialLinkDeleteController(req: Request, res: Response) {

    try {

        const { specialLinkID } = req.body

        const specialLink = await SPECIAL_LINK.findById(specialLinkID)

        if (!specialLink) {
            return res.status(404).json({ message: "SPECIAL_LINK_NOT_FOUND" })
        }

        const deletedPropertyLink = await SPECIAL_LINK.findByIdAndDelete(specialLinkID)

        return res.status(200).json({ message: "SPECIAL_LINK_DELETED", payload: deletedPropertyLink })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}