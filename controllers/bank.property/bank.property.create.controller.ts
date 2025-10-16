import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { BANK, BANK_PROPERTY, PROPERTY } from "../../services/mongodb"

export async function bankPropertyCreateController(req: Request, res: Response) {

    try {

        const { bankID, propertyID } = req.body
        
        const bank = await BANK.findById(bankID)

        if (!bank) {
            return res.status(404).json({ message: responseMessages.BANK_NOT_FOUND })
        }

        const property = await PROPERTY.findById(propertyID)

        if (!property) {
            return res.status(404).json({ message: responseMessages.PROPERTY_NOT_FOUND })
        }

        const isBankPropertyExist = await BANK_PROPERTY.findOne({ bankID, propertyID })

        if (isBankPropertyExist) {
            return res.status(409).json({ message: responseMessages.BANK_PROPERTY_ALREADY_EXISTS })
        }

        const createdBankProperty = await BANK_PROPERTY.create({ bankID,propertyID })

        return res.status(200).json({ message: responseMessages.BANK_PROPERTY_CREATED, payload: createdBankProperty })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}