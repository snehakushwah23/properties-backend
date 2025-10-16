"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDeleteRequestMiddleware = void 0;
const validateDeleteRequestMiddleware = (schema) => {
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
exports.validateDeleteRequestMiddleware = validateDeleteRequestMiddleware;
//# sourceMappingURL=validate.delete.request.middleware.js.map