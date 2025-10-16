import { Request, Response } from "express";
import { PROPERTY } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function getListingCount(_req: Request, res: Response) {
  try {
    const count = await PROPERTY.countDocuments({ listing: true });
    return res.status(200).json({
      message: "Total listing count retrieved successfully",
      payload: count
    });
  } catch (error) {
    console.error("Error fetching listing count:", error);
    return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
  }
}
