"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyUpdateController = propertyUpdateController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
const generate_random_string_1 = require("../../helpers/generate.random.string");
async function propertyUpdateController(req, res) {
    try {
        const { propertyID, name, shortIntroduction, shortDescription, propertyType, projectStatus, propertyShortID, assistantManager, bankAPFBankNames, builder, isHotProperty, listing, propertyOptions, propertyVariation, address, city, region, completedTower, contactRelationshipManagerName, contactRelationshipManagerPhoneNumber, contactSaleName, contactSalePhoneNumber, googleMapsSalesOfficeLink, googleMapsSiteLink, gpsSite, isBankAPF, launchedTower, numberOfFloor, partner, plotArea, price, propertyTier, reraID, reraStatus, salesOfficeAddress, salesOfficeGPS, shortAddress, shortOffer, shortVariant, showLikes, showRelationshipManagerContacts, showShortOffer, showWhatsappLink, sroPromoter, totalTower, websiteLink, possession, latitude, longitude, whatsappLink, status } = req.body;
        const property = await mongodb_1.PROPERTY.findById(propertyID);
        if (!property) {
            return res.status(404).json({ message: response_messages_1.responseMessages.PROPERTY_NOT_FOUND });
        }
        const updatedProperty = await mongodb_1.PROPERTY.findByIdAndUpdate(propertyID, {
            name, shortIntroduction, shortDescription, propertyType, projectStatus,
            propertyShortID: propertyShortID || property.propertyShortID || (0, generate_random_string_1.generateRandomString)(5),
            assistantManager, bankAPFBankNames, builderID: builder, isHotProperty,
            listing, propertyOptions, propertyVariation, address, city, region,
            completedTower, contactRelationshipManagerName, contactRelationshipManagerPhoneNumber,
            contactSaleName, contactSalePhoneNumber, googleMapsSalesOfficeLink, googleMapsSiteLink,
            gpsSite, isBankAPF, launchedTower, numberOfFloor, partner, plotArea,
            price, propertyTier, reraID: reraID || property.reraID || (0, generate_random_string_1.generateRandomString)(8),
            reraStatus, salesOfficeAddress, salesOfficeGPS, shortAddress,
            shortOffer, shortVariant, showLikes, showRelationshipManagerContacts,
            showShortOffer, showWhatsappLink, sroPromoter, totalTower, websiteLink,
            possession, latitude, longitude, whatsappLink, status
        }, { new: true });
        return res.status(200).json({ message: response_messages_1.responseMessages.PROPERTY_UPDATED, payload: updatedProperty });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=property.update.controller.js.map