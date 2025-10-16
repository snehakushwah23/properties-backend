import { Request, Response } from "express";
import { CUSTOMER } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function blockCustomer(req: Request, res: Response) {
  try {
    const { customerID } = req.body;

    if (!customerID) {
      return res.status(400).json({ error: "Customer ID is required" });
    }

    const updatedCustomer = await CUSTOMER.findByIdAndUpdate(
      customerID,
      { status: false },
      { new: true }
    );

    if (!updatedCustomer) {
      return res.status(404).json({ error: "Customer not found" });
    }

    return res.status(200).json({
      message: "Customer blocked successfully",
      payload: updatedCustomer,
    });
  } catch (error) {
    console.error("Error blocking customer:", error);
    return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
  }
}
