"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.likedPropertyCreateController = likedPropertyCreateController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function likedPropertyCreateController(req, res) {
    try {
        const { propertyID } = req.body;
        const { accessToken } = req;
        const property = await mongodb_1.PROPERTY.findById(propertyID);
        if (!property) {
            return res.status(404).json({ message: response_messages_1.responseMessages.PROPERTY_NOT_FOUND });
        }
        const isLikedPropertyExist = await mongodb_1.LINKED_PROPERTY.findOne({ customerID: accessToken.ID, propertyID });
        if (isLikedPropertyExist) {
            return res.status(409).json({ message: response_messages_1.responseMessages.LINKED_PROPERTY_ALREADY_EXISTS });
        }
        const createdLikedProperty = await mongodb_1.LINKED_PROPERTY.create({ customerID: accessToken.ID, propertyID });
        return res.status(200).json({ message: response_messages_1.responseMessages.LINKED_PROPERTY_CREATED, payload: createdLikedProperty });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=linked.property.create.controller.js.map