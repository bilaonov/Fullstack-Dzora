import { NextFunction, Request, Response } from 'express'
import { Results } from '../@types'

export function paginationResults(model: any) {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        //@ts-ignore
        const page = parseInt(req.query.page)
        const limit = 10
        const totalCount = await model.countDocuments().exec()
        const startIndex = (page - 1) * limit
        const endIndex = page * limit

        const results = {} as Results

        if (endIndex < totalCount) {
            results.next = {
                page: page + 1,
                limit: limit,
                totalCount: totalCount,
            }
        }

        if (startIndex > 0) {
            results.previous = {
                page: page - 1,
                limit: limit,
                totalCount: totalCount,
            }
        }
        try {
            results.results = await model.find().limit(limit).skip(startIndex).exec()
            res.paginationResults = results

            next()
        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }
}
