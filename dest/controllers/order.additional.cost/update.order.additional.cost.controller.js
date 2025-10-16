"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrderAdditionalCostController = void 0;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function updateOrderAdditionalCostController(req, res) {
    try {
        const { accessToken } = req;
        const { amount, note, title, orderAdditionalCostID } = req.body;
        const user = await mongodb_1.USER.findById(accessToken.ID);
        if (!user) {
            return res.status(404).json({ message: response_messages_1.responseMessages.USER_NOT_FOUND });
        }
        const orderAdditionalCost = await mongodb_1.ORDER_ADDITIONAL_COST.findById(orderAdditionalCostID);
        if (!orderAdditionalCost) {
            return res.status(404).json({ message: response_messages_1.responseMessages.ORDER_NOT_FOUND });
        }
        const createdOrderAdditionalCost = await mongodb_1.ORDER_ADDITIONAL_COST.findByIdAndUpdate(orderAdditionalCostID, { note, amount, title }, { new: true });
        return res.status(200).json({ message: response_messages_1.responseMessages.ORDER_ADDITIONAL_COST_UPDATED, payload: createdOrderAdditionalCost });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.updateOrderAdditionalCostController = updateOrderAdditionalCostController;
//# sourceMappingURL=update.order.additional.cost.controller.js.map