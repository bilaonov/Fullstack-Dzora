import React, { useState } from 'react'
import { addWords } from '../../store/ducks/words/actionCreators'
import { useDispatch } from 'react-redux'
import { ModalBlock } from '../ModalBlock/ModalBlock'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

interface AddWordsProps {
    open: boolean
    onClose: () => void
}

const WordsAdd: React.FC<AddWordsProps> = ({ open, onClose }) => {
    const [word, setWord] = useState<string>('')
    const [translate, setTranslate] = useState<string>('')

    const dispatch = useDispatch()

    const submitAddWord: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        dispatch(addWords({ translate, word }))
        setWord('')
        setTranslate('')
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
