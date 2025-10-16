"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrderController = void 0;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function updateOrderController(req, res) {
    try {
        const { accessToken } = req;
        const { amount, currency, deliveryDate, deliveryStatus, paymentStatus, note, quantity, title, orderID, urgent } = req.body;
        const user = await mongodb_1.USER.findById(accessToken.ID);
        if (!user) {
            return res.status(404).json({ message: response_messages_1.responseMessages.USER_NOT_FOUND });
        }
        const updatedOrder = await mongodb_1.ORDER.findByIdAndUpdate(orderID, { amount, currency, deliveryDate, deliveryStatus, paymentStatus, note, quantity, title, urgent }, { new: true });
        return res.status(200).json({ message: response_messages_1.responseMessages.ORDER_UPDATED, payload: updatedOrder });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.updateOrderController = updateOrderController;
//# sourceMappingURL=update.order.controller.js.map