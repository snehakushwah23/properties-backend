"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.specialLinkUpdateController = specialLinkUpdateController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function specialLinkUpdateController(req, res) {
    try {
        const { link, title, description, specialLinkID } = req.body;
        const propertyLink = await mongodb_1.SPECIAL_LINK.findById(specialLinkID);
        if (!propertyLink) {
            return res.status(404).json({ message: "SPECIAL_LINK_NOT_FOUND" });
        }
        const updatedLink = await mongodb_1.SPECIAL_LINK.findByIdAndUpdate(specialLinkID, { link, title, description }, { new: true });
        return res.status(200).json({ message: "SPECIAL_LINK_UPDATED", payload: updatedLink });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=special.link.update.controller.js.map