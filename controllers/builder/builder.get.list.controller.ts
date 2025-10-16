import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { BUILDER } from "../../services/mongodb"

export async function builderGetListController(req: Request, res: Response) {

    try {

        const { page, limit } = req.query

        const builderList = await BUILDER.find()
            .sort({ _id: -1 }) // Sorting in descending order (newest first)
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));

        return res.status(200).json({ message: responseMessages.BUILDERS_LIST_FETCHED, payload: builderList })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}