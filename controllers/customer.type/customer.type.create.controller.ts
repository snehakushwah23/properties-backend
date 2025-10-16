import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { CUSTOMER_TYPE } from "../../services/mongodb"


export async function customerTypeCreateController(req: Request, res: Response) {

    try {

        const { description, type } = req.body

        const createdBuilder = await CUSTOMER_TYPE.create({ description, type })

        return res.status(200).json({ message: responseMessages.CUSTOMER_TYPE_CREATED, payload: createdBuilder })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}