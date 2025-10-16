"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankOfferRouter = void 0;
const express_1 = require("express");
const token_middleware_1 = require("../middlewares/token.middleware");
const multer_middleware_1 = require("../middlewares/multer.middleware");
const bank_offer_create_controller_1 = require("../controllers/bank.offer/bank.offer.create.controller");
const bank_offer_delete_controller_1 = require("../controllers/bank.offer/bank.offer.delete.controller");
const bank_offer_get_controller_1 = require("../controllers/bank.offer/bank.offer.get.controller");
const bank_offer_update_controller_1 = require("../controllers/bank.offer/bank.offer.update.controller");
const bank_offer_update_logo_controller_1 = require("../controllers/bank.offer/bank.offer.update.logo.controller");
exports.bankOfferRouter = (0, express_1.Router)({ caseSensitive: true, strict: true });
exports.bankOfferRouter.post('/create', token_middleware_1.getAccessTokenInfo, multer_middleware_1.Multer.single('logo'), bank_offer_create_controller_1.bankOfferCreateController);
exports.bankOfferRouter.delete('/delete', token_middleware_1.getAccessTokenInfo, bank_offer_delete_controller_1.bankOfferDeleteController);
exports.bankOfferRouter.get('/get', token_middleware_1.getAccessTokenInfo, bank_offer_get_controller_1.bankOfferGetController);
exports.bankOfferRouter.patch('/update', token_middleware_1.getAccessTokenInfo, bank_offer_update_controller_1.bankOfferUpdateController);
exports.bankOfferRouter.patch('/update/logo', token_middleware_1.getAccessTokenInfo, multer_middleware_1.Multer.single('logo'), bank_offer_update_logo_controller_1.bankOfferUpdateLogoController);
//# sourceMappingURL=bank.offer.routes.js.map