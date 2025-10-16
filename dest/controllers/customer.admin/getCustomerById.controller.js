"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomerById = getCustomerById;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function getCustomerById(req, res) {
    try {
        const { customerID } = req.query;
        if (!customerID) {
            return res.status(400).json({ error: "Customer ID is required" });
        }
        const customer = await mongodb_1.CUSTOMER.findById(customerID);
        if (!customer) {
            return res.status(404).json({ error: "Customer not found" });
        }
        return res.status(200).json({
            message: "Customer details retrieved successfully",
            payload: customer,
        });
    }
    catch (error) {
        console.error("Error fetching customer details:", error);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=getCustomerById.controller.js.map