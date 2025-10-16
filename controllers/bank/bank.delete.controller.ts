import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { BANK } from "../../services/mongodb"

export async function bankDeleteController(req: Request, res: Response) {

    try {

        const { bankID } = req.body

        const bank = await BANK.findById(bankID)

        if (!bank) {
            return res.status(404).json({ message: responseMessages.BANK_NOT_FOUND })
        }

        const deletedBank = await BANK.findByIdAndDelete(bankID)

        return res.status(200).json({ message: responseMessages.BANK_DELETED, payload: deletedBank })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}