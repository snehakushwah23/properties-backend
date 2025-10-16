"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserCustomerListController = void 0;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
async function getUserCustomerListController(req, res) {
    try {
        const { accessToken } = req;
        const user = await mongodb_1.USER.findById(accessToken.ID);
        if (!user) {
            return res.status(404).json({ message: response_messages_1.responseMessages.USER_NOT_FOUND });
        }
        const useCustomerList = await mongodb_1.CUSTOMER.find({ userID: user._id });
        return res.status(200).json({ message: response_messages_1.responseMessages.USER_CUTOMER_LIST_FETCHED, payload: useCustomerList });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
exports.getUserCustomerListController = getUserCustomerListController;
//# sourceMappingURL=get.user.customer.list.controller.js.map