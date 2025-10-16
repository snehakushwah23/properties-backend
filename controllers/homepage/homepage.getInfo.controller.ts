import { Request, Response } from "express";
import { HOME_PAGE } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function getHomepageInfoController(_req: Request, res: Response) {
    try {
        const homepageInfo = await HOME_PAGE.findOne();

        return res.status(200).json({
            message: "Homepage Info Retrieved Successfully",
            payload: homepageInfo
        });

    } catch (err) {
        console.error("❌ ERROR in getHomepageInfoController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
