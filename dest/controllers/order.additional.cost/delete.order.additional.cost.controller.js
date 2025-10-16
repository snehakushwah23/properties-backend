"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderAdditionalCostController = void 0;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function deleteOrderAdditionalCostController(req, res) {
    try {
        const { accessToken } = req;
        const { orderAdditionalCostID } = req.body;
        const user = await mongodb_1.USER.findById(accessToken.ID);
        if (!user) {
            return res.status(404).json({ message: response_messages_1.responseMessages.USER_NOT_FOUND });
        }
        const orderAdditionalCost = await mongodb_1.ORDER_ADDITIONAL_COST.findById(orderAdditionalCostID);
        if (!orderAdditionalCost) {
            return res.status(404).json({ message: response_messages_1.responseMessages.ORDER_NOT_FOUND });
        }
        const deletedOrderAdditionalCost = await mongodb_1.ORDER_ADDITIONAL_COST.findByIdAndDelete(orderAdditionalCostID);
        return res.status(200).json({ message: response_messages_1.responseMessages.ORDER_ADDITIONAL_COST_DELETED, payload: deletedOrderAdditionalCost });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.deleteOrderAdditionalCostController = deleteOrderAdditionalCostController;
//# sourceMappingURL=delete.order.additional.cost.controller.js.map