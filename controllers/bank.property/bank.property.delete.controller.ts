import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { BANK_PROPERTY } from "../../services/mongodb"

export async function bankPropertyDeleteController(req: Request, res: Response) {

    try {

        const { bankPropertyID } = req.body

        const isBankPropertyExist = await BANK_PROPERTY.findById(bankPropertyID)

        if (!isBankPropertyExist) {
            return res.status(404).json({ message: responseMessages.BANK_PROPERTY_NOT_FOUND })
        }

        const deletedBankProperty = await BANK_PROPERTY.findByIdAndDelete(bankPropertyID)

        return res.status(200).json({ message: responseMessages.BANK_PROPERTY_DELETED, payload: deletedBankProperty })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}