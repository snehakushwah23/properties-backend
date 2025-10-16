"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyBuyOptionCreateController = propertyBuyOptionCreateController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function propertyBuyOptionCreateController(req, res) {
    try {
        const { area, price, description, propertyID, type } = req.body;
        const createdPropertyBuyOption = await mongodb_1.PROPERTY_BUY_OPTION.create({ area, price, description, propertyID, type });
        return res.status(200).json({ message: response_messages_1.responseMessages.PROPERTY_BUY_OPTION_CREATED, payload: createdPropertyBuyOption });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.buy.option.create.controller.js.map