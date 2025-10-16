"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomString = generateRandomString;
const uuid_1 = require("uuid");
function generateRandomString(length) {
    return String((0, uuid_1.v4)().replaceAll("-", '')).substring(0, length).toUpperCase();
}
//# sourceMappingURL=generate.random.string.js.map