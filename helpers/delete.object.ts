import dotenv from 'dotenv'
import { s3 } from '../services/s3'
dotenv.config()
export async function deleteObject( Key: any) {

    const params = {
        Bucket: String(process.env.PROJECT_NAME),
        Key
    }

    return s3.deleteObject(params).promise()

}

