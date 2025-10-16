import { Request, Response } from "express";
import { ASSOCIATE_IMAGE } from "../../services/mongodb";

export async function getAssociateImageListController(req: Request, res: Response) {
    try {
        const { page = 1, limit = 10 } = req.query;
        
        const images = await ASSOCIATE_IMAGE.find()
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));

        return res.status(200).json({
            message: "Associate images list retrieved successfully",
            payload: { imagesList: images } 
        });

    } catch (err) {
        return res.status(500).json({ error: "Execution failed" });
    }
}
