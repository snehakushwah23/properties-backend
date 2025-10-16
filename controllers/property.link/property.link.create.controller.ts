import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { PROPERTY_LINK } from "../../services/mongodb"

export async function propertyLinkCreateController(req: Request, res: Response) {

    try {

        const { link, propertyID, title, description } = req.body

        const createdLink = await PROPERTY_LINK.create({ link, propertyID, title, description })

        return res.status(200).json({ message: responseMessages.PROPERTY_LINK_CREATED, payload: createdLink })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}