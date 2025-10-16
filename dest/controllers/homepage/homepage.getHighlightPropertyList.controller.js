"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHighlightPropertyListController = getHighlightPropertyListController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function getHighlightPropertyListController(req, res) {
    try {
        const { city } = req.query;
        if (!city) {
            return res.status(400).json({ message: "City parameter is required" });
        }
        const properties = await mongodb_1.PROPERTY.find({ city: city });
        return res.status(200).json({
            message: "Highlighted Properties Retrieved Successfully",
            payload: properties
        });
    }
    catch (err) {
        console.error("❌ ERROR in getHighlightPropertyListController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=homepage.getHighlightPropertyList.controller.js.map