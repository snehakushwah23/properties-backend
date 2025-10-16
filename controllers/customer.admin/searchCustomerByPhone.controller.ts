import { Request, Response } from "express";
import { CUSTOMER } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function searchCustomerByPhone(req: Request, res: Response) {
  try {
    const { search, page = 1, limit = 10, order = "asc" } = req.query;

    if (!search) {
      return res.status(400).json({ error: "Phone number is required for search" });
    }

    const customers = await CUSTOMER.find({ phoneNumber: { $regex: search, $options: "i" } })
      .sort({ name: order === "asc" ? 1 : -1 })
      .skip((+page - 1) * +limit)
      .limit(+limit);

    return res.status(200).json({
      message: "Customers retrieved successfully",
      payload: customers,
    });
  } catch (error) {
    console.error("Error searching customers by phone number:", error);
    return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
  }
}
