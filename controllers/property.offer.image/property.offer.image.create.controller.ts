import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { PROPERTY_OFFER_IMAGE } from "../../services/mongodb"
import { uploadObjectImage } from "../../helpers/upload.object.image"
import { generateRandomString } from "../../helpers/generate.random.string"

export async function propertyOfferImageCreateController(req: Request, res: Response) {

    try {

        const { propertyID, title } = req.body

        const lastPhoto = await PROPERTY_OFFER_IMAGE.findOne({ propertyID }).sort({ order: -1 });
        
        const newOrder = lastPhoto ? lastPhoto.order + 1 : 1;

        const propertyOfferImageObject = await uploadObjectImage('property-offer-image', generateRandomString(10), req.file?.buffer, req.file?.mimetype)

        const createdPropertyOfferImage = await PROPERTY_OFFER_IMAGE.create({ image: propertyOfferImageObject, propertyID, title, order: newOrder })

        return res.status(200).json({ message: "PROPERTY OFFER IMAGE CREATED", payload: createdPropertyOfferImage })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}