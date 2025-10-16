import { NextFunction, Request, Response } from 'express'
import Joi from 'joi'
export const validateDeleteRequestMiddleware = (schema: Joi.Schema) => {

    return (req: Request, res: Response, next: NextFunction) => {

        const { error } = schema.validate(req.body)

        if (error) {
            res.status(400).json({ error })
        } else {
            next()
        }
    }
}
