
import dotenv from 'dotenv'
import { s3 } from '../services/s3'
dotenv.config()

export async function uploadObject(Bucket: any, Key: any, Body: any, ContentType: any) {

    const params = {
        Bucket: String(process.env.PROJECT_NAME) + "/" + String(process.env.ENVIRONMENT) + "/" + Bucket,
        Key,
        Body,
        ContentType,
        ACL: 'public-read',
    }

    return s3.upload(params).promise()

}
