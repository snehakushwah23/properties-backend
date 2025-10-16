import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { BANK } from "../../services/mongodb"
import { generateRandomString } from "../../helpers/generate.random.string"
import { uploadObjectImage } from "../../helpers/upload.object.image"

export async function bankUpdateLogoController(req: Request, res: Response) {

    try {

        const { bankID } = req.body

        const bank = await BANK.findById(bankID)

        if (!bank) {
            return res.status(404).json({ message: responseMessages.BANK_NOT_FOUND })
        }

        const logoObject = await uploadObjectImage('bank-logo', generateRandomString(10), req.file?.buffer, req.file?.mimetype)

        const updatedBank = await BANK.findByIdAndUpdate(bankID, { logo: logoObject }, { new: true })

        return res.status(200).json({ message: responseMessages.BANK_LOGO_UPDATED, payload: updatedBank })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}