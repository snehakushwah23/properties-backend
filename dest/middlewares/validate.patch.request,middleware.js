"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePatchRequestMiddleware = void 0;
const validatePatchRequestMiddleware = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            res.status(400).json({ error });
        }
        else {
            next();
        }
    };
};
exports.validatePatchRequestMiddleware = validatePatchRequestMiddleware;
//# sourceMappingURL=validate.patch.request,middleware.js.map