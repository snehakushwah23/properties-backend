import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { BUILDER } from "../../services/mongodb"
import { generateRandomString } from "../../helpers/generate.random.string"

export async function builderCreateController(req: Request, res: Response) {

    try {

        const {
            name,
            website,
            officeAddress,
            officeContactNumber,
            managerContactNumber,
            salesManagerContactNumber,
            memberOfSRO = [],
            yearOfExperience,
            completedProject,
            activeProjects
        } = req.body;

        // Generate a unique 4-character short ID
        const builderShortID = generateRandomString(4);

        const createdBuilder = await BUILDER.create({
            name,
            website,
            officeAddress,
            officeContactNumber,
            managerContactNumber,
            salesManagerContactNumber,
            memberOfSRO,
            yearOfExperience,
            completedProject,
            activeProjects,
            builderShortID,
            status: true,
        });

        return res.status(200).json({ message: responseMessages.BUILDER_CREATED, payload: createdBuilder })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}