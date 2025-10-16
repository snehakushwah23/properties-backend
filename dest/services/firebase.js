"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseAdmin = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.firebaseAdmin = require("firebase-admin");
let firebaseApp = null;
try {
    if (process.env.FIREBASE_PRIVATE_KEY) {
        firebaseApp = exports.firebaseAdmin.initializeApp({
            credential: exports.firebaseAdmin.credential.cert({
                type: String(process.env.FIREBASE_TYPE),
                project_id: String(process.env.FIREBASE_PROJECT_ID),
                private_key_id: String(process.env.FIREBASE_PRIVATE_KEY_ID),
                private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
                client_email: String(process.env.FIREBASE_CLIENT_EMAIL),
                client_id: String(process.env.FIREBASE_CLIENT_ID),
                auth_uri: String(process.env.FIREBASE_AUTH_URI),
                token_uri: String(process.env.FIREBASE_TOKEN_URI),
                auth_provider_x509_cert_url: String(process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL),
                client_x509_cert_url: String(process.env.FIREBASE_CLIENT_X509_CERT_URL),
                universe_domain: String(process.env.FIREBASE_UNIVERSE_DOMAIN),
            }),
        });
        console.log("Firebase Initialized Successfully");
    }
    else {
        console.warn("Firebase credentials are missing. Skipping Firebase initialization.");
    }
}
catch (err) {
    console.error("Firebase initialization failed:", err.message || err);
}
exports.default = firebaseApp;
//# sourceMappingURL=firebase.js.map