import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { BANK } from "../../services/mongodb"

export async function bankUpdateController(req: Request, res: Response) {

    try {

        const { name, managerContactNumber, officeAddress, contact, description, shortDescription, offer, shortName, bankID, status } = req.body

        const bank = await BANK.findById(bankID)

        if (!bank) {
            return res.status(404).json({ message: responseMessages.BANK_NOT_FOUND })
        }

        const updatedBank = await BANK.findByIdAndUpdate(bankID, { name, managerContactNumber, officeAddress, contact, description, shortDescription, offer, shortName, status }, { new: true })

        return res.status(200).json({ message: responseMessages.BANK_UPDATED, payload: updatedBank })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}