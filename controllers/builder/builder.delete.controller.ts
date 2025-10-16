import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { BUILDER } from "../../services/mongodb"
import { PROPERTY } from "../../services/mongodb"; // Import the PROPERTY model

export async function builderDeleteController(req: Request, res: Response) {

    try {

        const { builderID } = req.body

        const builder = await BUILDER.findById(builderID)

        if (!builder) {
            return res.status(404).json({ message: responseMessages.BUILDER_NOT_FOUND })
        }

        const deletedProperties = await PROPERTY.deleteMany({ builderID });

        const deletedBuilder = await BUILDER.findByIdAndDelete(builderID)

        return res.status(200).json({ message: responseMessages.BUILDER_DELETED, payload: deletedBuilder, deletedProperties })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}