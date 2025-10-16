import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { PROPERTY } from "../../services/mongodb"

export async function propertyGetListController(req: Request, res: Response) {

    try {

        const { page, limit } = req.query

        const propertyList = await PROPERTY.find().skip(Number(Number(page) - 1) * Number(limit)).limit(Number(limit))

        return res.status(200).json({ message: responseMessages.PROPRTY_LIST_FETCHED, payload: propertyList })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}