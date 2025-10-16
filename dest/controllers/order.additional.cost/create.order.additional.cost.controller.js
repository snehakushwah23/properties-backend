"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderAdditionalCostController = void 0;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function createOrderAdditionalCostController(req, res) {
    try {
        const { accessToken } = req;
        const { amount, note, title, orderID, } = req.body;
        const user = await mongodb_1.USER.findById(accessToken.ID);
        if (!user) {
            return res.status(404).json({ message: response_messages_1.responseMessages.USER_NOT_FOUND });
        }
        const order = await mongodb_1.ORDER.findById(orderID);
        if (!order) {
            return res.status(404).json({ message: response_messages_1.responseMessages.ORDER_NOT_FOUND });
        }
        if (!order.userID.equals(user._id)) {
            return res.status(404).json({ message: response_messages_1.responseMessages.CUSTOMER_DOES_NOT_BELONGS_TO_USER });
        }
        const createdOrderAdditionalCost = await mongodb_1.ORDER_ADDITIONAL_COST.create({ note, orderID, amount, currency: order.currency, title, });
        return res.status(200).json({ message: response_messages_1.responseMessages.ORDER_ADDITIONAL_COST_CREATED, payload: createdOrderAdditionalCost });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.createOrderAdditionalCostController = createOrderAdditionalCostController;
//# sourceMappingURL=create.order.additional.cost.controller.js.map