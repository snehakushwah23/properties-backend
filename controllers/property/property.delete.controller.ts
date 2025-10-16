import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { PROPERTY } from "../../services/mongodb"

export async function propertyDeleteController(req: Request, res: Response) {

    try {

        const { propertyID } = req.body

        const property = await PROPERTY.findById(propertyID)

        if (!property) {
            return res.status(404).json({ message: responseMessages.PROPERTY_NOT_FOUND })
        }

        const deletedProperty = await PROPERTY.findByIdAndDelete(propertyID)

        return res.status(200).json({ message: responseMessages.PROPERTY_DELETED, payload: deletedProperty })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}