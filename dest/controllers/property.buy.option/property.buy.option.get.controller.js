"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyBuyOptionGetController = propertyBuyOptionGetController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function propertyBuyOptionGetController(req, res) {
    try {
        const { propertyBuyOptionID } = req.query;
        const propertyBuyOption = await mongodb_1.PROPERTY_BUY_OPTION.findById(propertyBuyOptionID);
        if (!propertyBuyOption) {
            return res.status(404).json({ message: response_messages_1.responseMessages.PROPERTY_BUY_OPTION_NOT_FOUND });
        }
        return res.status(200).json({ message: response_messages_1.responseMessages.PROPERTY_BUY_OPTION_FETCHED, payload: propertyBuyOption });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.buy.option.get.controller.js.map