"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyOfferImageDeleteController = propertyOfferImageDeleteController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
const delete_object_1 = require("../../helpers/delete.object");
async function propertyOfferImageDeleteController(req, res) {
    try {
        const { propertyOfferImageID } = req.body;
        const propertyOfferImage = await mongodb_1.PROPERTY_OFFER_IMAGE.findById(propertyOfferImageID);
        if (!propertyOfferImage) {
            return res.status(404).json({ message: response_messages_1.responseMessages.PROPERTY_OTHER_IMAGE_NOT_FOUND });
        }
        const deletedPropertyOfferImage = await mongodb_1.PROPERTY_OFFER_IMAGE.findByIdAndDelete(propertyOfferImageID);
        await (0, delete_object_1.deleteObject)(deletedPropertyOfferImage?.image.key);
        return res.status(200).json({ message: "PROPERTY OFFER IMAGE DELETED", payload: propertyOfferImage });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.offer.image.delete.controller.js.map