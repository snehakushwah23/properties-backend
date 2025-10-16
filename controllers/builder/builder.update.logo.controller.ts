import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { BUILDER } from "../../services/mongodb"
import { generateRandomString } from "../../helpers/generate.random.string"
import { uploadObjectImage } from "../../helpers/upload.object.image"

export async function builderUpdateLogoController(req: Request, res: Response) {

    try {

        const { builderID } = req.body

        const builder = await BUILDER.findById(builderID)

        if (!builder) {
            return res.status(404).json({ message: responseMessages.BUILDER_NOT_FOUND })
        }
        
        const logoObject = await uploadObjectImage('builder-logo', generateRandomString(10), req.file?.buffer, req.file?.mimetype)

        const updatedBuilder: any = await BUILDER.findByIdAndUpdate(builderID, { logo: logoObject }).lean()

        updatedBuilder.logo = logoObject

        return res.status(200).json({ message: responseMessages.BUILDER_LOGO_UPDATED, payload: updatedBuilder })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}