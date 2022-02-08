import React, { useCallback } from 'react'
import '../../App.scss'
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
    } = useForm<WordsData>({
        resolver: yupResolver(addWordsSchema),
    })

    const onSubmit = useCallback(
        (data: WordsData) => {
            dispatch(addWords(data))
            reset({ word: '', translate: '' })
        },
        [dispatch, reset],
    )

    return (
        <ModalBlock visible={open} onClose={onClose} title="Добавить слово">
            <Box
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}
                noValidate
                autoComplete="off"
                component="form"
                className="form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <TextField
                    fullWidth
                    label="Введите слова на дигорском"
                    {...register('word')}
                    helperText={errors.word ? errors.word.message : ''}
                    error={!!errors.word}
                    variant="filled"
                />
                <TextField
                    sx={{ mt: 2 }}
                    fullWidth
                    id="standard-textarea"
                    placeholder="Введите слова на русском"
                    variant="filled"
                    {...register('translate')}
                    helperText={errors.translate ? errors.translate.message : ''}
                    error={!!errors.translate}
                    label="Введите слова на русском"
                />
                <Button type="submit" variant="contained" color="success">
                    Добавить
                </Button>
            </Box>
        </ModalBlock>
    )
}

export default WordsAdd
