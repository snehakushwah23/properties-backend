import { Request, Response } from "express";
import { SUB_ADMIN } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function subAdminUpdateProfilePictureController(req: Request, res: Response) {
    try {
        const { accessToken } = req as any;
        const { profilePicture } = req.body;

        if (!profilePicture) {
            return res.status(400).json({ message: "Profile picture URL is required" });
        }

        await SUB_ADMIN.findByIdAndUpdate(accessToken.ID, { profilePicture });

        return res.status(200).json({
            message: responseMessages.PROFILE_PICTURE_UPDATED
        });

    } catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
