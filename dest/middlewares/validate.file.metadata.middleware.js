"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateFileTypeMetadata = validateFileTypeMetadata;
function validateFileTypeMetadata(fileType, maxSize) {
    return (req, res, next) => {
        const supportedMineTypes = {
            audio: [
                'image/jpeg',
                'image/png',
                'image/gif',
                'image/svg+xml',
                'image/bmp',
                'image/webp',
                'image/tiff',
                'image/x-icon',
                'image/vnd.adobe.photoshop',
                'image/vnd.wap.wbmp'
            ],
            video: [
                'video/mp4',
                'video/x-msvideo',
                'video/x-matroska',
                'video/webm',
                'video/quicktime',
                'video/x-ms-wmv',
                'video/x-flv',
                'video/3gpp',
                'video/ogg',
                'video/vnd.rn-realvideo'
            ],
            image: [
                'image/jpeg',
                'image/png',
                'image/gif',
                'image/svg+xml',
                'image/bmp',
                'image/webp',
                'image/tiff',
                'image/x-icon',
                'image/vnd.adobe.photoshop',
                'image/vnd.wap.wbmp',
            ],
            PDF: ['application/pdf']
        };
        if (supportedMineTypes[fileType].includes(req.file?.mimetype) == true && req.file?.size <= maxSize * 1024) {
            next();
        }
        else {
            res.status(400).json({ message: 'Invalid file type' });
        }
    };
}
//# sourceMappingURL=validate.file.metadata.middleware.js.map