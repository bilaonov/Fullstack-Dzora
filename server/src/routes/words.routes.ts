import Router, { Request, Response } from 'express'
import { IWord } from '../@types/index'
import Word from '../models/words'

const router = Router()

router.post('/words', async (req: Request, res: Response): Promise<void> => {
    try {
        const { word, translate, audio } = req.body
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
            audio,
        })
        await words.save()

        res.json({ message: 'Слова успешно добавлены спасибо' })
    } catch (e) {
        res.send({ message: 'Server error' })
    }
})

router.get('/words', async (req: Request, res: Response): Promise<void> => {
    try {
        const limit = 10
        //@ts-ignore
        const page = +req.query.page || 1
        const skip = limit * page - limit
        const totalCount = await Word.countDocuments().exec()
        const last_page = Math.ceil(totalCount / limit) || 0
        const words = await Word.find().sort({ verify: 1 }).skip(skip).limit(limit).exec()

        if (!words) {
            res.status(404).json({ message: 'Посты не найдены' })
        }

        res.json({
            total: totalCount,
            data: words,
            current_page: page,
            last_page: last_page,
        })
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
        const { word, translate, verify } = req.body

        const update = { word, translate, verify }
        let words: any = await Word.findById(req.params.id)

        if (!words) {
            res.status(404).json({ message: 'Слова не найдены' })
        }

        words = await Word.findByIdAndUpdate(req.params.id, { $set: update }, { new: true })
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
