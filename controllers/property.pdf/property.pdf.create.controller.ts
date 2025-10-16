import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { PROPERTY_PDF } from "../../services/mongodb"
import { generateRandomString } from "../../helpers/generate.random.string"
import { uploadObject } from "../../helpers/upload.object"

export async function propertyPDFCreateController(req: Request, res: Response) {

    try {

        const { propertyID, title } = req.body

        const propertyPDFObject = await uploadObject('property-pdf', generateRandomString(10), req.file?.buffer, req.file?.mimetype)

        const createdPropertyOtherPDF = await PROPERTY_PDF.create({ pdf: propertyPDFObject, propertyID, title })

        return res.status(200).json({ message: responseMessages.PROPERTY_PDF_CREATED, payload: createdPropertyOtherPDF })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}