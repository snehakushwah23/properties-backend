"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateGetRequestMiddleware = void 0;
const validateGetRequestMiddleware = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.query);
        if (error) {
            res.status(400).json({ error });
        }
        else {
            next();
        }
    };
};
exports.validateGetRequestMiddleware = validateGetRequestMiddleware;
//# sourceMappingURL=validate.get.request.middleware.js.map