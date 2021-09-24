import Router, { Request, Response } from 'express'
import { IWord } from '../@types/index'
import Word from '../models/word'

const router = Router()

router.post('/word', async (req:Request, res: Response): Promise<void> => {
    try {
        console.log(req.body)
        const {dig_word, rus_word} = req.body
        const  uniqWord = await Word.findOne({dig_word, rus_word})

        if(uniqWord) {
            res.status(400).json({message: `Извините но слово ${dig_word} ${rus_word} уже существует в нашей базе `})
        }
        const word: IWord = new Word({dig_word, rus_word})
        await word.save()
            res.json({message: 'Слова успешно добавлены спасибо'})
    } catch (e) {
        console.log(e)
        res.send({message: 'Server error'})
    }
})

export default router