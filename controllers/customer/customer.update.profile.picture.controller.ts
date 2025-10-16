import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { CUSTOMER } from "../../services/mongodb"
import { generateRandomString } from "../../helpers/generate.random.string"
import { uploadObjectImage } from "../../helpers/upload.object.image"
import { deleteObject } from "../../helpers/delete.object"

export async function customerUpdateProfilePictureController(req: Request, res: Response) {

    try {

        const { accessToken } = (req as any)

        const customer = await CUSTOMER.findById(accessToken.ID)

        if (!customer) {
            return res.status(404).json({ message: responseMessages.CUSTOMER_DOES_NOT_EXIST })
        }

        const customerProfilePictureObject = await uploadObjectImage('customer-profile-picture', generateRandomString(10), req.file?.buffer, req.file?.mimetype)

        const updatedCustomerProfilePicture: any = await CUSTOMER.findByIdAndUpdate(accessToken.ID, { profilePicture: customerProfilePictureObject }).lean()

        if (customer.profilePicture) {
            await deleteObject(customer?.profilePicture.key)
        }

        updatedCustomerProfilePicture.profilePicture = customerProfilePictureObject

        return res.status(200).json({ message: responseMessages.CUSTOMER_PROFILE_PICTURE_UPDATED, payload: updatedCustomerProfilePicture })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}