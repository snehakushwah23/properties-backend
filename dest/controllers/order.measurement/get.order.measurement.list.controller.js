"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderMeasurementListController = void 0;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function getOrderMeasurementListController(req, res) {
    try {
        const { accessToken } = req;
        const { orderID } = req.query;
        const user = await mongodb_1.USER.findById(accessToken.ID);
        if (!user) {
            return res.status(404).json({ message: response_messages_1.responseMessages.USER_NOT_FOUND });
        }
        const order = await mongodb_1.ORDER.findById(orderID);
        if (!order) {
            return res.status(404).json({ message: response_messages_1.responseMessages.ORDER_NOT_FOUND });
        }
        const orderMeasurements = await mongodb_1.ORDER_MEASUREMENT.find({ orderID });
        return res.status(200).json({ message: response_messages_1.responseMessages.ORDER_MEASUREMENT_LIST_FETCHED, payload: orderMeasurements });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.getOrderMeasurementListController = getOrderMeasurementListController;
//# sourceMappingURL=get.order.measurement.list.controller.js.map