"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyPDFRouter = void 0;
const express_1 = require("express");
const token_middleware_1 = require("../middlewares/token.middleware");
const property_pdf_create_controller_1 = require("../controllers/property.pdf/property.pdf.create.controller");
const property_pdf_delete_controller_1 = require("../controllers/property.pdf/property.pdf.delete.controller");
const property_pdf_get_controller_1 = require("../controllers/property.pdf/property.pdf.get.controller");
const property_pdf_update_controller_1 = require("../controllers/property.pdf/property.pdf.update.controller");
const property_pdf_get_list_controller_1 = require("../controllers/property.pdf/property.pdf.get.list.controller");
const multer_middleware_1 = require("../middlewares/multer.middleware");
exports.propertyPDFRouter = (0, express_1.Router)({ caseSensitive: true, strict: true });
exports.propertyPDFRouter.post('/create', token_middleware_1.getAccessTokenInfo, multer_middleware_1.Multer.single('pdf'), property_pdf_create_controller_1.propertyPDFCreateController);
exports.propertyPDFRouter.delete('/delete', token_middleware_1.getAccessTokenInfo, property_pdf_delete_controller_1.propertyPDFDeleteController);
exports.propertyPDFRouter.get('/get', property_pdf_get_controller_1.propertyPDFGetController);
exports.propertyPDFRouter.get('/get/list', property_pdf_get_list_controller_1.propertyPDFListController);
exports.propertyPDFRouter.patch('/update', token_middleware_1.getAccessTokenInfo, property_pdf_update_controller_1.propertyPDFUpdateController);
//# sourceMappingURL=property.pdf.routes.js.map