import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { NEWS } from "../../services/mongodb"

export async function newsUpdateController(req: Request, res: Response) {

    try {

        const { newsID, description, city, link, title } = req.body

        const news = await NEWS.findById(newsID)

        if (!news) {
            return res.status(404).json({ message: responseMessages.NEWS_NOT_FOUND })
        }

        const updatedNews = await NEWS.findByIdAndUpdate(newsID, { description, city, link, title }, { new: true })

        return res.status(200).json({ message: responseMessages.NEWS_UPDATED, payload: updatedNews })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}