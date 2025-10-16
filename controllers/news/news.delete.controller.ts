import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { NEWS } from "../../services/mongodb"
import { deleteObject } from "../../helpers/delete.object"

export async function newsDeleteController(req: Request, res: Response) {

    try {

        const { newsID } = req.body

        const news = await NEWS.findById(newsID)

        if (!news) {
            return res.status(404).json({ message: responseMessages.NEWS_NOT_FOUND })
        }

        await deleteObject(news?.thumbnail.Key)

        const deletedNews = await NEWS.findByIdAndDelete(newsID)

        return res.status(200).json({ message: responseMessages.NEWS_DELETED, payload: deletedNews })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}