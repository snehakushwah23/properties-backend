"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderMeasurementController = void 0;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function getOrderMeasurementController(req, res) {
    try {
        const { accessToken } = req;
        const { orderMeasurementID } = req.query;
        const user = await mongodb_1.USER.findById(accessToken.ID);
        if (!user) {
            return res.status(404).json({ message: response_messages_1.responseMessages.USER_NOT_FOUND });
        }
        const orderMeasurement = await mongodb_1.ORDER_MEASUREMENT.findById(orderMeasurementID);
        if (!orderMeasurement) {
            return res.status(404).json({ message: response_messages_1.responseMessages.ORDER_MEASUREMENT_NOT_FOUND });
        }
        return res.status(200).json({ message: response_messages_1.responseMessages.ORDER_MEASUREMENT_FETCHED, payload: orderMeasurement });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.getOrderMeasurementController = getOrderMeasurementController;
//# sourceMappingURL=get.order.measurement.controller.js.map