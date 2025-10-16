"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.specialLinkDeleteController = specialLinkDeleteController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function specialLinkDeleteController(req, res) {
    try {
        const { specialLinkID } = req.body;
        const specialLink = await mongodb_1.SPECIAL_LINK.findById(specialLinkID);
        if (!specialLink) {
            return res.status(404).json({ message: "SPECIAL_LINK_NOT_FOUND" });
        }
        const deletedPropertyLink = await mongodb_1.SPECIAL_LINK.findByIdAndDelete(specialLinkID);
        return res.status(200).json({ message: "SPECIAL_LINK_DELETED", payload: deletedPropertyLink });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=special.link.delete.controller.js.map