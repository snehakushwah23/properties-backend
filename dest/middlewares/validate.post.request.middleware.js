"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePostRequestMiddleware = void 0;
const validatePostRequestMiddleware = (schema) => {
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
exports.validatePostRequestMiddleware = validatePostRequestMiddleware;
//# sourceMappingURL=validate.post.request.middleware.js.map