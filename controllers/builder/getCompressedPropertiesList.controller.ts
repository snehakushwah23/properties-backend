import { Request, Response } from "express";
import { PROPERTY } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function getCompressedPropertiesList(req: Request, res: Response) {
  try {
    const { builderID } = req.query;

    if (!builderID) {
      return res.status(400).json({ error: "Builder ID is required" });
    }

    const properties = await PROPERTY.find({ builderID }).select("_id name location price");

    return res.status(200).json({
      message: "Compressed properties list retrieved successfully",
      payload: properties
    });
  } catch (error) {
    console.error("Error fetching compressed properties list:", error);
    return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
  }
}
