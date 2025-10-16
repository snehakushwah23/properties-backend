"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.builderUpdateController = void 0;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function builderUpdateController(req, res) {
    try {
        const { name, managerContactNumber, officeAddress, officeContactNumber, website, seniorManagerContactNumber, builderID } = req.body;
        const builder = await mongodb_1.BUILDER.findById(builderID);
        if (!builder) {
            return res.status(404).json({ message: response_messages_1.responseMessages.BUILDER_NOT_FOUND });
        }
        const updatedBuilder = await mongodb_1.BUILDER.findByIdAndUpdate(builderID, { name, managerContactNumber, officeAddress, officeContactNumber, website, seniorManagerContactNumber }, { new: true });
        return res.status(200).json({ message: response_messages_1.responseMessages.BUILDER_UPDATED, payload: updatedBuilder });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.builderUpdateController = builderUpdateController;
//# sourceMappingURL=property.buy.update.controller.js.map