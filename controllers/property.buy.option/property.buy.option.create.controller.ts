import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { PROPERTY_BUY_OPTION } from "../../services/mongodb"

export async function propertyBuyOptionCreateController(req: Request, res: Response) {

    try {

        const { area, price, description, propertyID, type } = req.body

        const createdPropertyBuyOption = await PROPERTY_BUY_OPTION.create({ area, price, description, propertyID, type })

        return res.status(200).json({ message: responseMessages.PROPERTY_BUY_OPTION_CREATED, payload: createdPropertyBuyOption })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}