import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { BUILDER } from "../../services/mongodb"

export async function builderGetController(req: Request, res: Response) {

    try {

        const { builderID } = req.query

        const builder = await BUILDER.findById(builderID)

        if (!builder) {
            return res.status(404).json({ message: responseMessages.BUILDER_NOT_FOUND })
        }

        return res.status(200).json({ message: responseMessages.BUILDER_FETCHED, payload: builder })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}