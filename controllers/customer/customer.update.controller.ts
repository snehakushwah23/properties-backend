import { Request, Response } from "express"
import { responseMessages } from '../../constants/response.messages'
import { CUSTOMER } from "../../services/mongodb"

export async function customerUpdateController(req: Request, res: Response) {

    try {

        const { accessToken } = (req as any)

        const { gender, name } = req.body

        const customer = await CUSTOMER.findById(accessToken.ID)

        if (!customer) {
            return res.status(404).json({ message: responseMessages.CUSTOMER_DOES_NOT_EXIST })
        }

        const createdCustomer = await CUSTOMER.findByIdAndUpdate(accessToken.ID, { name, gender }, { new: true })

        return res.status(200).json({ message: responseMessages.CUSTOMER_UPDATED, payload: createdCustomer })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}
