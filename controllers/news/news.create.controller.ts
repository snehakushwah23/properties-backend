import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { NEWS } from "../../services/mongodb"
import { uploadObjectImage } from "../../helpers/upload.object.image"
import { generateRandomString } from "../../helpers/generate.random.string"


export async function newsCreateController(req: Request, res: Response) {

    try {

        const { description, bankID, builderID, city, link, title, propertyID } = req.body

        const newsThumbnailObject = await uploadObjectImage('news-thumbnail', generateRandomString(10), req.file?.buffer, req.file?.mimetype)

        const createdBuilder = await NEWS.create({ description, bankID, builderID, city, link, thumbnail: newsThumbnailObject, title, propertyID })

        return res.status(200).json({ message: responseMessages.NEWS_CREATED, payload: createdBuilder })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}