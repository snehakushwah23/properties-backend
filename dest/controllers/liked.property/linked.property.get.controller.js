"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLikedPropertyListController = getLikedPropertyListController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function getLikedPropertyListController(req, res) {
    try {
        const { page = 1, limit = 10 } = req.query;
        const { accessToken } = req;
        const pageNumber = parseInt(page, 10);
        const limitNumber = parseInt(limit, 10);
        if (isNaN(pageNumber) || isNaN(limitNumber)) {
            return res.status(400).json({ message: "Not found" });
        }
        const likedProperties = await mongodb_1.LINKED_PROPERTY.find({ customerID: accessToken.ID })
            .skip((pageNumber - 1) * limitNumber)
            .limit(limitNumber)
            .populate("propertyID", "name location price images");
        return res.status(200).json({
            message: response_messages_1.responseMessages.LINKED_PROPERTY_LIST_FETCHED,
            payload: likedProperties
        });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=linked.property.get.controller.js.map