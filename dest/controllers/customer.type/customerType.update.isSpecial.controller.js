"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerTypeUpdateIsSpecialController = customerTypeUpdateIsSpecialController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function customerTypeUpdateIsSpecialController(req, res) {
    try {
        const { customerTypeID, isSpecial } = req.body;
        if (!customerTypeID || typeof isSpecial !== "boolean") {
            return res.status(400).json({ message: "customerTypeID and isSpecial (boolean) are required" });
        }
        const updatedCustomerType = await mongodb_1.CUSTOMER_TYPE.findByIdAndUpdate(customerTypeID, { isSpecial }, { new: true });
        if (!updatedCustomerType) {
            return res.status(404).json({ message: response_messages_1.responseMessages.CUSTOMER_TYPE_NOT_FOUND });
        }
        return res.status(200).json({
            message: "Customer Type updated successfully",
            payload: updatedCustomerType
        });
    }
    catch (err) {
        console.error("ERROR in customerTypeUpdateIsSpecialController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=customerType.update.isSpecial.controller.js.map