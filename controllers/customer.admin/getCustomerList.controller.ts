import { Request, Response } from "express";
import { CUSTOMER } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function getCustomerList(req: Request, res: Response) {
  try {
    const { page = 1, limit = 10 } = req.query;

    const customers = await CUSTOMER.find()
      .skip((+page - 1) * +limit)
      .limit(+limit);

    const totalCustomers = await CUSTOMER.countDocuments();

    return res.status(200).json({
      message: "Customer list retrieved successfully",
      payload: {
        customers,
        totalPages: Math.ceil(totalCustomers / +limit),
        currentPage: +page,
      },
    });
  } catch (error) {
    console.error("Error fetching customer list:", error);
    return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
  }
}
