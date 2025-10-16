"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blockCustomer = blockCustomer;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function blockCustomer(req, res) {
    try {
        const { customerID } = req.body;
        if (!customerID) {
            return res.status(400).json({ error: "Customer ID is required" });
        }
        const updatedCustomer = await mongodb_1.CUSTOMER.findByIdAndUpdate(customerID, { status: false }, { new: true });
        if (!updatedCustomer) {
            return res.status(404).json({ error: "Customer not found" });
        }
        return res.status(200).json({
            message: "Customer blocked successfully",
            payload: updatedCustomer,
        });
    }
    catch (error) {
        console.error("Error blocking customer:", error);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=blockCustomer.controller.js.map