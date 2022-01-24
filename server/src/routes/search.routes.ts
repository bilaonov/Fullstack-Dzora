import Router, { Request, Response } from 'express'

import Word from '../models/words'

const router = Router()

router.get('/:searchString', async (req: Request, res: Response): Promise<void> => {
    try {
        const query = req.params.searchString
        const regEx = new RegExp(query, 'i')

        const word = await Word.find({ word: regEx, verify: true })
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
