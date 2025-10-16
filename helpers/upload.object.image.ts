
import dotenv from 'dotenv'
import { s3 } from '../services/s3'
dotenv.config()
import sharp from 'sharp'

export async function uploadObjectImage(Bucket: any, Key: any, Body: any, ContentType: any, quality: number = 20) {
    const compressedBuffer = await sharp(Body).webp({ quality: quality }).toBuffer()

    const params = {
        Bucket: String(process.env.PROJECT_NAME) + "/" + String(process.env.ENVIRONMENT) + "/" + Bucket,
        Key,
        Body: compressedBuffer,
        ContentType,
        ACL: 'public-read',
    }

    return s3.upload(params).promise()

}
