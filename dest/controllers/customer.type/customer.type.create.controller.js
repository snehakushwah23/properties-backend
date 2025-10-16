"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerTypeCreateController = customerTypeCreateController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function customerTypeCreateController(req, res) {
    try {
        const { description, type } = req.body;
        const createdBuilder = await mongodb_1.CUSTOMER_TYPE.create({ description, type });
        return res.status(200).json({ message: response_messages_1.responseMessages.CUSTOMER_TYPE_CREATED, payload: createdBuilder });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=customer.type.create.controller.js.map