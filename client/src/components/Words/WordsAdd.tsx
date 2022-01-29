import React, { useEffect, useState } from 'react'
import { addWords } from '../../store/ducks/words/actionCreators'
import { useDispatch, useSelector } from 'react-redux'
import { ModalBlock } from '../ModalBlock/ModalBlock'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'
import { wordsLoadingStatus } from '../../store/ducks/words/selectors'
import { LoadingState } from '../../types'

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
                    label="Введите слова на дигорском"
                    onChange={(e) => setWord(e.target.value)}
                    variant="standard"
                />
                <TextField
                    sx={{ mt: 2 }}
                    onChange={(e) => setTranslate(e.target.value)}
                    fullWidth
                    value={translate}
                    id="standard-textarea"
                    label="Введите слова на русском"
                    variant="standard"
                />
                <Button type="submit" id="btn_add" variant="contained" color="success">
                    Добавить
                </Button>
            </Box>
        </ModalBlock>
    )
}

export default WordsAdd
