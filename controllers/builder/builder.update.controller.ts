import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { BUILDER } from "../../services/mongodb"

export async function builderUpdateController(req: Request, res: Response) {

    try {

        const {
            builderID,
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
            status
        } = req.body;

        const builder = await BUILDER.findById(builderID)

        if (!builder) {
            return res.status(404).json({ message: responseMessages.BUILDER_NOT_FOUND })
        }

        const updatedBuilder = await BUILDER.findByIdAndUpdate(
            builderID,
            {
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
                status
            },
            { new: true }
        );

        return res.status(200).json({ message: responseMessages.BUILDER_UPDATED, payload: updatedBuilder })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}