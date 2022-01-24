import React, { useState, useEffect } from 'react'
import { addWordsSchema } from '../../services/helpers/validation'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import './Words.scss'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { addWords, fetchWords } from '../../store/ducks/words/actionCreators'
import { useDispatch, useSelector } from 'react-redux'
import { ModalBlock } from '../ModalBlock/ModalBlock'

interface AddWordsProps {
    open: boolean
    onClose: () => void
}

const WordsAdd: React.FC<AddWordsProps> = ({ open, onClose }) => {
    const [word, setWord] = useState<string>('')
    const [translate, setTranslate] = useState<string>('')
    const [error, setError] = useState('')

    const dispatch = useDispatch()

    const submitAddWord: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        if (!word || !translate) {
            setError('Пожалуйста заполните все поля')
        } else {
            dispatch(addWords({ translate, word }))
            setWord('')
            setTranslate('')
        }
    }

    return (
        <ModalBlock visible={open} onClose={onClose} title="Добавить слово">
            <Box component="form" onSubmit={submitAddWord}>
                <TextField
                    fullWidth
                    value={word}
                    id="standard-textarea"
                    label="Добавить слово на дигорском"
                    placeholder="Введите слово на дигорском"
                    onChange={(e) => setWord(e.target.value)}
                    variant="standard"
                />
                <TextField
                    onChange={(e) => setTranslate(e.target.value)}
                    fullWidth
                    value={translate}
                    id="standard-textarea"
                    label="Добавить слово на русском"
                    placeholder="Введите слово на русском"
                    variant="standard"
                />
                <Button sx={{ mt: 3, mr: 2 }} variant="outlined">
                    Отменить
                </Button>
                <Button type="submit" sx={{ mt: 3 }} variant="contained" color="success">
                    Добавить
                </Button>
            </Box>
        </ModalBlock>
    )
}

export default WordsAdd
