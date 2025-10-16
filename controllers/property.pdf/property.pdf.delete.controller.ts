import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { PROPERTY_PDF } from "../../services/mongodb"
import { deleteObject } from "../../helpers/delete.object"

export async function propertyPDFDeleteController(req: Request, res: Response) {

    try {

        const { propertyPDFID } = req.body

        const propertyPDF = await PROPERTY_PDF.findById(propertyPDFID)

        if (!propertyPDF) {
            return res.status(404).json({ message: responseMessages.PROPERTY_PDF_NOT_FOUND })
        }

        const deletedPropertyPDF = await PROPERTY_PDF.findByIdAndDelete(propertyPDFID)

        await deleteObject(deletedPropertyPDF?.pdf.key)

        return res.status(200).json({ message: responseMessages.PROPERTY_PDF_DELETED, payload: propertyPDF })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}