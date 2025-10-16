import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { CUSTOMER_TYPE } from "../../services/mongodb"

export async function customerTypeDeleteController(req: Request, res: Response) {

    try {

        const { customerTypeID } = req.body

        const customerType = await CUSTOMER_TYPE.findById(customerTypeID)

        if (!customerType) {
            return res.status(404).json({ message: responseMessages.CUSTOMER_TYPE_NOT_FOUND })
        }

        const deletedCustomerType = await CUSTOMER_TYPE.findByIdAndDelete(customerTypeID)

        return res.status(200).json({ message: responseMessages.CUSTOMER_TYPE_DELETED, payload: deletedCustomerType })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}