"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchCustomerByName = searchCustomerByName;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function searchCustomerByName(req, res) {
    try {
        const { search, page = 1, limit = 10, order = "asc" } = req.query;
        if (!search) {
            return res.status(400).json({ error: "Customer name is required for search" });
        }
        const customers = await mongodb_1.CUSTOMER.find({ name: { $regex: search, $options: "i" } })
            .sort({ name: order === "asc" ? 1 : -1 })
            .skip((+page - 1) * +limit)
            .limit(+limit);
        return res.status(200).json({
            message: "Customers retrieved successfully",
            payload: customers,
        });
    }
    catch (error) {
        console.error("Error searching customers by name:", error);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=searchCustomerByName.controller.js.map