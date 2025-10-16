import { Request, Response } from "express";
import { BUILDER } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function getBuilderCount(_req: Request, res: Response) {
  try {
    const count = await BUILDER.countDocuments();
    return res.status(200).json({
      message: "Total builder count retrieved successfully",
      payload: count
    });
  } catch (error) {
    console.error("Error fetching builder count:", error);
    return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
  }
}
