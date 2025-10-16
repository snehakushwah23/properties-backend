"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPropertyBuyOptionListController = getPropertyBuyOptionListController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function getPropertyBuyOptionListController(req, res) {
    try {
        const { propertyID } = req.query;
        if (!propertyID) {
            return res.status(400).json({ message: response_messages_1.responseMessages.PROPERTY_BUY_OPTION_NOT_FOUND });
        }
        const propertyBuyOptions = await mongodb_1.PROPERTY_BUY_OPTION.find({ propertyID });
        if (!propertyBuyOptions.length) {
            return res.status(404).json({ message: response_messages_1.responseMessages.PROPERTY_BUY_OPTION_NOT_FOUND });
        }
        return res.status(200).json({
            message: response_messages_1.responseMessages.PROPERTY_BUY_OPTION_LIST_FETCHED,
            payload: propertyBuyOptions
        });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=getPropertyBuyOptionList.controller.js.map