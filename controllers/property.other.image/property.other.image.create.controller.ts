import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { PROPERTY_OTHER_IMAGE } from "../../services/mongodb"
import { uploadObjectImage } from "../../helpers/upload.object.image"
import { generateRandomString } from "../../helpers/generate.random.string"

export async function propertyOtherImageCreateController(req: Request, res: Response) {

    try {

        const { propertyID, title } = req.body

        const lastPhoto = await PROPERTY_OTHER_IMAGE.findOne({ propertyID }).sort({ order: -1 });
        
        const newOrder = lastPhoto ? lastPhoto.order + 1 : 1;

        const propertyOtherImageObject = await uploadObjectImage('property-other-image', generateRandomString(10), req.file?.buffer, req.file?.mimetype)

        const createdPropertyOtherImage = await PROPERTY_OTHER_IMAGE.create({ image: propertyOtherImageObject, propertyID, title, order: newOrder })

        return res.status(200).json({ message: responseMessages.PROPERTY_OTHER_IMAGE_CREATED, payload: createdPropertyOtherImage })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}