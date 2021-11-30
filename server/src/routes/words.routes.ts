import Router, { Request, Response } from 'express'
import { IWord } from '../@types/index'
import Word from '../models/words'

import { paginationResults } from './pagination'

const router = Router()

router.post('/words', async (req: Request, res: Response): Promise<void> => {
    try {
        const { word, translate, voice, avatar } = req.body
        const uniqWord = await Word.findOne({ word })
        const uniqTranlate = await Word.findOne({ translate })

        if (uniqWord) {
            res.status(400).json({
                message: `Извините но слово ${word} уже существует в нашей базе `,
            })
        }
        if (uniqTranlate) {
            res.status(400).json({
                message: `Извините но слово ${translate} уже существует в нашей базе `,
            })
        }

        const words: IWord = new Word({
            word,
            translate,
            voice,
            avatar
        })
        await words.save()

        res.json({ message: 'Слова успешно добавлены спасибо' })
    } catch (e) {
        res.send({ message: 'Server error' })
    }
})

router.get('/words', paginationResults(Word), async (req: Request, res: Response): Promise<void> => {
    try {
        const words = await Word.find().count().sort({ date: -1 })

        if (!words) {
            res.status(404).json({ message: 'Посты не найдены' })
        }

        res.json(res.paginationResults)
    } catch (e) {
        console.log(e)
        res.send({ message: 'Server error' })
    }
})

router.get('/words', async (req: Request, res: Response): Promise<void> => {
    try {
        const words = await Word.find().count().sort({ date: -1 })

        if (!words) {
            res.status(404).json({ message: 'Посты не найдены' })
        }

        res.json(words)
    } catch (e) {
        console.log(e)
        res.send({ message: 'Server error' })
    }
})

router.get('/words/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const words: any = await Word.findById(req.params.id)
        if (!words) {
            res.status(404).json({ message: 'Посты не найдены' })
        }

        res.json({ word: words })
    } catch (e) {
        console.log(e)
        res.send({ message: 'Server error' })
    }
})

router.put('/words/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const { word, translate } = req.body

        const updateWord = { word, translate }
        let words: any = await Word.findById(req.params.id)

        if (!words) {
            res.status(404).json({ message: 'Слова не найдены' })
        }

        words = await Word.findByIdAndUpdate(req.params.id, { $set: updateWord }, { new: true })
        await words.save()

        res.json(words)
    } catch (e) {
        console.log(e)
        res.send({ message: 'Server error' })
    }
})

router.delete('/words/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const words: any = await Word.findById(req.params.id)
        if (words) {
            await words.remove()
            res.json({ message: 'Слово успешно удалено' })
        } else {
            res.status(404).json({ message: 'Посты не найдены' })
            return
        }
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: 'Server error' })
    }
})

export default router
