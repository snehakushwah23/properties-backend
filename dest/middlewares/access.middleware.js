"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminAccessMiddleware = adminAccessMiddleware;
const response_messages_1 = require("../constants/response.messages");
const mongodb_1 = require("../services/mongodb");
async function adminAccessMiddleware(req, res, next) {
    try {
        const accessToken = req.accessToken;
        const admin = await mongodb_1.ADMIN.findById(accessToken.ID);
        if (!admin) {
            return res.sendStatus(403).json({ message: response_messages_1.responseMessages.UNAUTHORIZED });
        }
        return next();
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=access.middleware.js.map