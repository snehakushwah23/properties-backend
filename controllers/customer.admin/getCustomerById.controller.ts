import { Request, Response } from "express";
import { CUSTOMER } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function getCustomerById(req: Request, res: Response) {
  try {
    const { customerID } = req.query;

    if (!customerID) {
      return res.status(400).json({ error: "Customer ID is required" });
    }

    const customer = await CUSTOMER.findById(customerID);

    if (!customer) {
      return res.status(404).json({ error: "Customer not found" });
    }

    return res.status(200).json({
      message: "Customer details retrieved successfully",
      payload: customer,
    });
  } catch (error) {
    console.error("Error fetching customer details:", error);
    return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
  }
}
