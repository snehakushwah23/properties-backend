import { Request, Response } from "express";
import { BUILDER } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function getBuilderAndDeveloperListController(_req: Request, res: Response) {
    try {
        const builders = await BUILDER.find({}, { name: 1, logo: 1, _id: 1 });

        return res.status(200).json({
            message: "Builder and Developer List Retrieved Successfully",
            payload: builders
        });

    } catch (err) {
        console.error("ERROR in getBuilderAndDeveloperListController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
