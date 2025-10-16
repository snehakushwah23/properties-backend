import { Request, Response, NextFunction } from 'express'

/**
+ * Validates the file type metadata based on the supported mine types.
+ *
+ * @param {string} fileType - the type of file being validated
+ * @param {number} maxSize - the maximum size of the file in KB
+ * @return {RequestHandler} the middleware function for validating file type metadata
+ */
export function validateFileTypeMetadata(fileType: string, maxSize: number) {
    return (req: Request, res: Response, next: NextFunction) => {
        const supportedMineTypes: Record<string, string[]> = {
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

        }

        if (supportedMineTypes[fileType].includes(req.file?.mimetype as string) == true && (req.file?.size as number) <= maxSize * 1024) {
            next()
        } else {
            res.status(400).json({ message: 'Invalid file type' })
        }
    }
}