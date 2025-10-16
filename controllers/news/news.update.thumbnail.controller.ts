import { Request, Response } from "express";
import { NEWS } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function newsUpdateThumbnailController(req: Request, res: Response) {
    try {
        const { newsID } = req.body;

        if (!newsID || !req.file) {
            return res.status(400).json({ message: "News ID and thumbnail are required" });
        }

        const updatedNews = await NEWS.findByIdAndUpdate(
            newsID,
            { thumbnail: req.file },
            { new: true }
        );

        if (!updatedNews) {
            return res.status(404).json({ message: responseMessages.NEWS_NOT_FOUND });
        }

        return res.status(200).json({
            message: "News thumbnail updated successfully",
            payload: updatedNews
        });

    } catch (err) {
        console.error("ERROR in newsUpdateThumbnailController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
