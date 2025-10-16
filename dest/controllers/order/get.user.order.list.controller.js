"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserOrderListController = void 0;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function getUserOrderListController(req, res) {
    try {
        const { accessToken } = req;
        const user = await mongodb_1.USER.findById(accessToken.ID);
        if (!user) {
            return res.status(404).json({ message: response_messages_1.responseMessages.USER_NOT_FOUND });
        }
        const userOrderList = await mongodb_1.ORDER.find({ userID: user._id });
        return res.status(200).json({ message: response_messages_1.responseMessages.USER_ORDER_LIST_FETCHED, payload: userOrderList });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.getUserOrderListController = getUserOrderListController;
//# sourceMappingURL=get.user.order.list.controller.js.map