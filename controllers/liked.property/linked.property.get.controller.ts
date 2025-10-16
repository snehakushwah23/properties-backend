import { Request, Response } from "express";
import { responseMessages } from "../../constants/response.messages";
import { LINKED_PROPERTY } from "../../services/mongodb";

export async function getLikedPropertyListController(req: Request, res: Response) {
    try {
        const { page = 1, limit = 10 } = req.query;
        const { accessToken } = req as any;

        const pageNumber = parseInt(page as string, 10);
        const limitNumber = parseInt(limit as string, 10);

        if (isNaN(pageNumber) || isNaN(limitNumber)) {
            return res.status(400).json({ message: "Not found" });
        }

        const likedProperties = await LINKED_PROPERTY.find({ customerID: accessToken.ID })
            .skip((pageNumber - 1) * limitNumber)
            .limit(limitNumber)
            .populate("propertyID", "name location price images");

        return res.status(200).json({
            message: responseMessages.LINKED_PROPERTY_LIST_FETCHED,
            payload: likedProperties
        });

    } catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
