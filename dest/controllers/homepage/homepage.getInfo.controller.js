"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHomepageInfoController = getHomepageInfoController;
const mongodb_1 = require("../../services/mongodb");
const response_messages_1 = require("../../constants/response.messages");
async function getHomepageInfoController(_req, res) {
    try {
        const homepageInfo = await mongodb_1.HOME_PAGE.findOne();
        return res.status(200).json({
            message: "Homepage Info Retrieved Successfully",
            payload: homepageInfo
        });
    }
    catch (err) {
        console.error("❌ ERROR in getHomepageInfoController:", err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=homepage.getInfo.controller.js.map