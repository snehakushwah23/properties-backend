"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerUpdateProfilePictureController = customerUpdateProfilePictureController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
const generate_random_string_1 = require("../../helpers/generate.random.string");
const upload_object_image_1 = require("../../helpers/upload.object.image");
const delete_object_1 = require("../../helpers/delete.object");
async function customerUpdateProfilePictureController(req, res) {
    try {
        const { accessToken } = req;
        const customer = await mongodb_1.CUSTOMER.findById(accessToken.ID);
        if (!customer) {
            return res.status(404).json({ message: response_messages_1.responseMessages.CUSTOMER_DOES_NOT_EXIST });
        }
        const customerProfilePictureObject = await (0, upload_object_image_1.uploadObjectImage)('customer-profile-picture', (0, generate_random_string_1.generateRandomString)(10), req.file?.buffer, req.file?.mimetype);
        const updatedCustomerProfilePicture = await mongodb_1.CUSTOMER.findByIdAndUpdate(accessToken.ID, { profilePicture: customerProfilePictureObject }).lean();
        if (customer.profilePicture) {
            await (0, delete_object_1.deleteObject)(customer?.profilePicture.key);
        }
        updatedCustomerProfilePicture.profilePicture = customerProfilePictureObject;
        return res.status(200).json({ message: response_messages_1.responseMessages.CUSTOMER_PROFILE_PICTURE_UPDATED, payload: updatedCustomerProfilePicture });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=customer.update.profile.picture.controller.js.map