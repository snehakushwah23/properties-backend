import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { NEWS } from "../../services/mongodb"

export async function newsGetController(req: Request, res: Response) {

    try {

        const { newsID } = req.query

        const news = await NEWS.findById(newsID)

        if (!news) {
            return res.status(404).json({ message: responseMessages.NEWS_NOT_FOUND })
        }

        return res.status(200).json({ message: responseMessages.NEWS_FETCHED, payload: news })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}