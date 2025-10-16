"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomerList = getCustomerList;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function getCustomerList(req, res) {
    try {
        const { page = 1, limit = 10 } = req.query;
        const customers = await mongodb_1.CUSTOMER.find()
            .skip((+page - 1) * +limit)
            .limit(+limit);
        const totalCustomers = await mongodb_1.CUSTOMER.countDocuments();
        return res.status(200).json({
            message: "Customer list retrieved successfully",
            payload: {
                customers,
                totalPages: Math.ceil(totalCustomers / +limit),
                currentPage: +page,
            },
        });
    }
    catch (error) {
        console.error("Error fetching customer list:", error);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=getCustomerList.controller.js.map