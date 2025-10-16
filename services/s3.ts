import aws from 'aws-sdk'
import dotenv from 'dotenv'
dotenv.config()

aws.config.update({
    accessKeyId: String(process.env.DIGITAL_OCEAN_ACCESS_KEY_ID),
    secretAccessKey: String(process.env.DIGITAL_OCEAN_SECRET_ACCESS_KEY),
    region: String(process.env.DIGITAL_OCEAN_REGION),
})

export const s3 = new aws.S3({
    endpoint: String(process.env.DIGITAL_OCEAN_ENDPOINT),
    s3ForcePathStyle: true,
})





