import { Request, Response } from "express";
import { PROPERTY } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function getPropertiesList(req: Request, res: Response) {
  try {
    const { page = 1, limit = 10, builderID } = req.query;

    if (!builderID) {
      return res.status(400).json({ error: "Builder ID is required" });
    }

    const properties = await PROPERTY.find({ builderID })
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit));

    return res.status(200).json({
      message: "Builder properties list retrieved successfully",
      payload: properties
    });
  } catch (error) {
    console.error("Error fetching properties list:", error);
    return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
  }
}
