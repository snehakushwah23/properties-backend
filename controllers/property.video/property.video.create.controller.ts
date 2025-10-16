import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { PROPERTY_VIDEO } from "../../services/mongodb"
import { generateRandomString } from "../../helpers/generate.random.string"
import { uploadObject } from "../../helpers/upload.object"

export async function propertyVideoCreateController(req: Request, res: Response) {

    try {

        const { propertyID, title } = req.body

        const lastPhoto = await PROPERTY_VIDEO.findOne({ propertyID }).sort({ order: -1 });
        
        const newOrder = lastPhoto ? lastPhoto.order + 1 : 1;

        const propertyVideoObject = await uploadObject('property-video', generateRandomString(10), req.file?.buffer, req.file?.mimetype)

        const createdPropertyOtherVideo = await PROPERTY_VIDEO.create({ video: propertyVideoObject, propertyID, title })

        return res.status(200).json({ message: responseMessages.PROPERTY_VIDEO_CREATED, payload: createdPropertyOtherVideo, order: newOrder })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}