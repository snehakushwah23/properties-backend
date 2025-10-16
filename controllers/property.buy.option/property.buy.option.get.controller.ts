import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { PROPERTY_BUY_OPTION } from "../../services/mongodb"

export async function propertyBuyOptionGetController(req: Request, res: Response) {

    try {

        const { propertyBuyOptionID } = req.query

        const propertyBuyOption = await PROPERTY_BUY_OPTION.findById(propertyBuyOptionID)

        if (!propertyBuyOption) {
            return res.status(404).json({ message: responseMessages.PROPERTY_BUY_OPTION_NOT_FOUND })
        }

        return res.status(200).json({ message: responseMessages.PROPERTY_BUY_OPTION_FETCHED, payload: propertyBuyOption })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}