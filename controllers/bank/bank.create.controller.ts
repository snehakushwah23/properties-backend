import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { BANK } from "../../services/mongodb"

export async function bankCreateController(req: Request, res: Response) {

    try {

        const { name, managerContactNumber, officeAddress, contact, description, shortDescription, offer, shortName, status } = req.body

        const createdBank = await BANK.create({ name, managerContactNumber, officeAddress, contact, description, shortDescription, offer, shortName, status })

        return res.status(200).json({ message: responseMessages.BANK_CREATED, payload: createdBank })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}