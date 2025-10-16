import { Request, Response } from "express";
import { BUILDER } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function updateBuilderActiveStatus(req: Request, res: Response) {
  try {
    const { builderID, status } = req.body;

    if (!builderID || typeof status !== "boolean") {
      return res.status(400).json({ error: "Builder ID and status are required" });
    }

    const updatedBuilder = await BUILDER.findByIdAndUpdate(
      builderID,
      { status },
      { new: true }
    );

    return res.status(200).json({
      message: "Builder active status updated successfully",
      payload: updatedBuilder
    });
  } catch (error) {
    console.error("Error updating builder status:", error);
    return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
  }
}
