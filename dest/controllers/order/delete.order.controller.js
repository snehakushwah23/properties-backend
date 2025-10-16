"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderController = void 0;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function deleteOrderController(req, res) {
    try {
        const { accessToken } = req;
        const { orderID } = req.body;
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
        const deletedOrder = await mongodb_1.ORDER.findByIdAndDelete(orderID);
        return res.status(200).json({ message: response_messages_1.responseMessages.ORDER_DELETED, payload: deletedOrder });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.deleteOrderController = deleteOrderController;
//# sourceMappingURL=delete.order.controller.js.map