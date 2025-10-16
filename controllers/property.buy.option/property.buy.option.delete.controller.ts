import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { PROPERTY_BUY_OPTION } from "../../services/mongodb"

export async function propertyBuyOptionDeleteController(req: Request, res: Response) {

    try {

        const { propertyBuyOptionID } = req.body

        const propertyBuyOption = await PROPERTY_BUY_OPTION.findById(propertyBuyOptionID)

        if (!propertyBuyOption) {
            return res.status(404).json({ message: responseMessages.PROPERTY_BUY_OPTION_NOT_FOUND })
        }

        const deletedPropertyButOption = await PROPERTY_BUY_OPTION.findByIdAndDelete(propertyBuyOptionID)

        return res.status(200).json({ message: responseMessages.PROPERTY_BUY_OPTION_DELETED, payload: deletedPropertyButOption })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}