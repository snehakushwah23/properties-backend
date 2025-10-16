import dotenv from 'dotenv'
import { s3 } from '../services/s3'
dotenv.config()

export async function getObject(Key: any) {

    const params = {
        Bucket: String(process.env.PROJECT_NAME),
        Key
    }

    return s3.getObject(params).promise()

}


 