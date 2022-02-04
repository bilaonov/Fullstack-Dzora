import React from 'react'
import { addWords } from '../../store/ducks/words/actionCreators'
import { useDispatch } from 'react-redux'
import { ModalBlock } from '../ModalBlock/ModalBlock'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { addWordsSchema } from '../../services/helpers/validation'
import { WordsData } from '../../store/ducks/words/types/state'

interface AddWordsProps {
    open: boolean
    onClose: () => void
}

const WordsAdd: React.FC<AddWordsProps> = ({ open, onClose }) => {
    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(addWordsSchema),
    })
    const onSubmit = (data: WordsData) => {
        dispatch(addWords(data))
        reset({ word: '', translate: '' })
    }

    return (
        <ModalBlock visible={open} onClose={onClose} title="Добавить слово">
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    fullWidth
                    id="standard-textarea"
                    label="Введите слова на дигорском"
                    {...register('word')}
                    helperText={errors.word ? errors.word.message : ''}
                    error={!!errors.word}
                    variant="standard"
                />
                <TextField
                    sx={{ mt: 2 }}
                    {...register('translate')}
                    helperText={errors.translate ? errors.translate.message : ''}
                    error={!!errors.translate}
                    fullWidth
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
