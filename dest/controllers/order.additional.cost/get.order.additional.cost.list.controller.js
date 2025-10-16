"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderAdditionalCostListController = void 0;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function getOrderAdditionalCostListController(req, res) {
    try {
        const { accessToken } = req;
        const { orderID } = req.query;
        const user = await mongodb_1.USER.findById(accessToken.ID);
        if (!user) {
            return res.status(404).json({ message: response_messages_1.responseMessages.USER_NOT_FOUND });
        }
        const orderAdditionalCostList = await mongodb_1.ORDER_ADDITIONAL_COST.find({ orderID });
        return res.status(200).json({ message: response_messages_1.responseMessages.ORDER_ADDITIONAL_COST_LIST_FETCHED, payload: orderAdditionalCostList });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.getOrderAdditionalCostListController = getOrderAdditionalCostListController;
//# sourceMappingURL=get.order.additional.cost.list.controller.js.map