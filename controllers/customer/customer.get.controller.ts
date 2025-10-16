import { Request, Response } from "express"
import { responseMessages } from '../../constants/response.messages'
import { CUSTOMER } from "../../services/mongodb"

export async function customerGetController(req: Request, res: Response) {

    try {

        const { accessToken } = (req as any)

        const customer: any = await CUSTOMER.findById(accessToken.ID).lean()

        if (!customer) {
            return res.status(404).json({ message: responseMessages.CUSTOMER_DOES_NOT_EXIST })
        }

        delete customer?.password

        return res.status(200).json({ message: responseMessages.CUSTOMER_FETCHED, payload: customer })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}
