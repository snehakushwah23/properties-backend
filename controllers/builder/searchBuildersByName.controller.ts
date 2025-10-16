import { Request, Response } from "express";
import { BUILDER } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function searchBuildersByName(req: Request, res: Response) {
  try {
    const { search, page = 1, limit = 10, order = "asc" } = req.query;

    if (!search) {
      return res.status(400).json({ error: "Search query is required" });
    }

    const builders = await BUILDER.find({
      name: { $regex: search, $options: "i" }
    })
      .sort({ name: order === "asc" ? 1 : -1 })
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit));

    return res.status(200).json({
      message: "Builder search results retrieved successfully",
      payload: builders
    });
  } catch (error) {
    console.error("Error searching builders:", error);
    return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
  }
}
