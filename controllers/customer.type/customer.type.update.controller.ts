import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { CUSTOMER_TYPE } from "../../services/mongodb"

export async function customerTypeUpdateController(req: Request, res: Response) {

    try {

        const { customerTypeID, type, description } = req.body

        const customerType = await CUSTOMER_TYPE.findById(customerTypeID)

        if (!customerType) {
            return res.status(404).json({ message: responseMessages.CUSTOMER_TYPE_NOT_FOUND })
        }

        const updatedCustomerType = await CUSTOMER_TYPE.findByIdAndUpdate(customerTypeID, { type, description }, { new: true })

        return res.status(200).json({ message: responseMessages.CUSTOMER_TYPE_UPDATED, payload: updatedCustomerType })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}