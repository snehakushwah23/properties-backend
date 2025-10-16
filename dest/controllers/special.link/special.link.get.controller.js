"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.specialLinkGetController = specialLinkGetController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function specialLinkGetController(req, res) {
    try {
        const { specialLinkID } = req.query;
        const propertyLink = await mongodb_1.SPECIAL_LINK.findById(specialLinkID);
        if (!propertyLink) {
            return res.status(404).json({ message: "SPECIAL_LINK_NOT_FOUND" });
        }
        return res.status(200).json({ message: "SPECIAL_LINK_FETCHED", payload: propertyLink });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=special.link.get.controller.js.map