"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyOfferDescriptionRouter = void 0;
const express_1 = require("express");
const property_offer_description_get_controller_1 = require("../controllers/property.offer.description/property.offer.description.get.controller");
const property_offer_description_create_controller_1 = require("../controllers/property.offer.description/property.offer.description.create.controller");
const token_middleware_1 = require("../middlewares/token.middleware");
exports.propertyOfferDescriptionRouter = (0, express_1.Router)({ caseSensitive: true, strict: true });
exports.propertyOfferDescriptionRouter.get("/get", property_offer_description_get_controller_1.getPropertyOfferDescriptionController);
exports.propertyOfferDescriptionRouter.post("/create/offerDescription", token_middleware_1.getAccessTokenInfo, property_offer_description_create_controller_1.createPropertyOfferDescriptionController);
//# sourceMappingURL=property.offer.description.routes.js.map