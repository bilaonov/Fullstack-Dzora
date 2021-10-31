import Router, { Request, Response } from 'express'

import Word from '../models/word'

const router = Router()

router.get(
    '/:searchString',
    async (req: Request, res: Response): Promise<void> => {
        let query = req.params.searchString
        try {
            const word = await Word
            .find({ $text: { $search: query } }, { score: { $meta: 'textScore' } })
            .sort({ score: { $meta: 'textScore' } })
            .limit(1)
            .lean()
            
            if (!word) res.status(400).json({ msg: 'Post not found' })
            res.json(word)
            console.log()
        } catch (e) {
            console.log(e)
            res.send({ message: 'Server error' })
        }
    }
)

export default router
