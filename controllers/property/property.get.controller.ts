import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { PROPERTY } from "../../services/mongodb"

export async function propertyGetController(req: Request, res: Response) {

    try {

        const { propertyID } = req.query

        const property = await PROPERTY.findById(propertyID)

        if (!property) {
            return res.status(404).json({ message: responseMessages.PROPERTY_NOT_FOUND })
        }

        return res.status(200).json({ message: responseMessages.PROPERTY_FETCHED, payload: property })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}