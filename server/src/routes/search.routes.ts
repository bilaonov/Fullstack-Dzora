import Router, { Request, Response } from 'express'

import Word from '../models/words'

const router = Router()

router.get(
    '/:searchString',
    async (req: Request, res: Response): Promise<void> => {
        try {
            const word = await Word.find(
                
                { $text: { $search: req.params.searchString } },
                { score: { $meta: "textScore" } }
            )
                .sort({ score: { $meta: "textScore" } })
                .limit(5)
                .exec()
            if (!word) res.status(400).json({ msg: 'Post not found' })
            res.json(word)
        } catch (e) {
            console.log(e)
            res.send({ message: 'Server error' })
        }
    }
)

export default router
