import Router, { Request, Response } from 'express'
import { IWord } from '../@types/index'
import Word from '../models/word'

const router = Router()

router.post('/words', async (req:Request, res: Response): Promise<void> => {
    try {
        console.log(req.body)
        const {dig_word, rus_word} = req.body
        const uniqDigWord = await Word.findOne({dig_word})
        const uniqRusWord = await Word.findOne({rus_word})

        if(uniqDigWord) {
            res.status(400).json({message: `Извините но слово ${dig_word} уже существует в нашей базе `})
            return
        }
        if(uniqRusWord) {
            res.status(400).json({message: `Извините но слово ${rus_word} уже существует в нашей базе `})
            return
        }
        const word: IWord = new Word({dig_word, rus_word})
        await word.save()
            res.json({message: 'Слова успешно добавлены спасибо'})
            return
    } catch (e) {
        res.send({message: 'Server error'})
        return
    }
})



router.get('/words', async (req:Request, res: Response): Promise<void> => {
    try {
        const words = await Word.find().sort({date: -1})
        if (!words) {
            res.status(404).json({message: "Посты не найдены"})
        }
        res.json(words)
    } catch (e) {
        console.log(e)
        res.send({message: 'Server error'})
    }
})

router.get('/word/:id', async (req:Request, res: Response): Promise<void> => {
    try {
        const word:any = await Word.findById(req.params.id)
        if (!word) {
            res.status(404).json({message: "Посты не найдены"})
        }
        
        word.save()
        res.json({word: word})
    } catch (e) {
        console.log(e)
        res.send({message: 'Server error'})
    }
})

router.put('/word/:id', async (req:Request, res: Response): Promise<void> => {
    try {
        const {dig_word, rus_word} = req.body

        const updateWord = {dig_word, rus_word}
        let word:any = await Word.findById(req.params.id)

        if (!word) {
            res.status(404).json({message: "Слова не найдены"})
        }

        word = await Word.findByIdAndUpdate(req.params.id, {$set: updateWord}, {new: true})
        await word.save()
        
        res.json(word)
    } catch (e) {
        console.log(e)
        res.send({message: 'Server error'})
    }
})

router.delete('/word/:id', async (req:Request, res: Response): Promise<void> => {
    try {
        const word:any = await Word.findById(req.params.id)
        if (!word) {
            res.status(404).json({message: "Посты не найдены"})
        }
        
        await word.remove()
        res.json({message: "Слово успешно удалено"})
    } catch (e) {
        console.log(e)
        res.send({message: 'Server error'})
    }
})

export default router