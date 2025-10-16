"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyOfferRouter = void 0;
const express_1 = require("express");
const token_middleware_1 = require("../middlewares/token.middleware");
const property_offer_create_controller_1 = require("../controllers/property.offer/property.offer.create.controller");
const property_offer_delete_controller_1 = require("../controllers/property.offer/property.offer.delete.controller");
const property_offer_get_controller_1 = require("../controllers/property.offer/property.offer.get.controller");
const property_offer_update_controller_1 = require("../controllers/property.offer/property.offer.update.controller");
const getPropertyOfferList_controller_1 = require("../controllers/property.offer/getPropertyOfferList.controller");
exports.propertyOfferRouter = (0, express_1.Router)({ caseSensitive: true, strict: true });
exports.propertyOfferRouter.post('/create', token_middleware_1.getAccessTokenInfo, property_offer_create_controller_1.propertyOfferCreateController);
exports.propertyOfferRouter.delete('/delete', token_middleware_1.getAccessTokenInfo, property_offer_delete_controller_1.propertyOfferDeleteController);
exports.propertyOfferRouter.get('/get', property_offer_get_controller_1.propertyOfferGetController);
exports.propertyOfferRouter.patch('/update', token_middleware_1.getAccessTokenInfo, property_offer_update_controller_1.propertyOfferUpdateController);
exports.propertyOfferRouter.get('/get/list', getPropertyOfferList_controller_1.getPropertyOfferListController);
//# sourceMappingURL=property.offer.routes.js.map