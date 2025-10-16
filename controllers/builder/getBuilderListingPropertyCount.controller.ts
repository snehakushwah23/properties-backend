import { Request, Response } from "express";
import { PROPERTY } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function getBuilderListingPropertyCount(req: Request, res: Response) {
  try {
    const { builderID } = req.query;

    if (!builderID) {
      return res.status(400).json({ error: "Builder ID is required" });
    }

    const count = await PROPERTY.countDocuments({ builderID, listing: true });
    return res.status(200).json({
      message: "Builder listing property count retrieved successfully",
      payload: count
    });
  } catch (error) {
    console.error("Error fetching listing property count:", error);
    return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
  }
}
