import Router, { Request, Response } from 'express'

import Word from '../models/words'

const router = Router()

router.get('/dig/:searchString', async (req: Request, res: Response): Promise<void> => {
    try {
        const limit = 5
        const query = req.params.searchString
        const regEx = new RegExp(query, 'i')

        const word = await Word.find({ word: regEx, verify: true }).limit(limit)
        if (!word)
            res.status(400).json({
                message: 'Post not found',
            })
        res.json(word)
    } catch (e) {
        console.log(e)
        res.send({ message: 'Server error' })
    }
})

router.get('/rus/:searchString', async (req: Request, res: Response): Promise<void> => {
    try {
        const limit = 5
        const query = req.params.searchString
        const regEx = new RegExp(query, 'i')

        const word = await Word.find({ translate: regEx, verify: true }).limit(limit)
        if (!word)
            res.status(400).json({
                msg: 'Post not found',
            })
        res.json(word)
    } catch (e) {
        console.log(e)
        res.send({ message: 'Server error' })
    }
})

export default router
