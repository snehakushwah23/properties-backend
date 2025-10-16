import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { PROPERTY_PDF } from "../../services/mongodb"

export async function propertyPDFGetController(req: Request, res: Response) {

    try {

        const { propertyPDFID } = req.query

        const propertyPDF = await PROPERTY_PDF.findById(propertyPDFID)

        if (!propertyPDF) {
            return res.status(404).json({ message: responseMessages.PROPERTY_PDF_NOT_FOUND })
        }
        
        return res.status(200).json({ message: responseMessages.PROPERTY_PDF_FETCHED, payload: propertyPDF })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}