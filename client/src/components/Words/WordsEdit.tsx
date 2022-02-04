import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import { currentPageWords, selectWordsVerify } from '../../store/ducks/words/selectors'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { addWordsSchema } from '../../services/helpers/validation'
import { WordsData } from '../../store/ducks/words/types/state'
import { updateWords } from '../../store/ducks/words/actionCreators'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

const WordsEdit: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const data = useSelector(selectWordsVerify).find((data) => String(data._id) === id)
    const page = useSelector(currentPageWords)
    const [open, setOpen] = useState<boolean>(true)

    const handleClose = () => setOpen(false)

    if (!open) {
        navigate(`/list`)
    }

    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(addWordsSchema),
    })
    const onSubmit = (data: WordsData) => {
        dispatch(updateWords(id, page, data))
        setOpen(false)
        navigate(`/list`)
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} component="form" onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        {...register('word')}
                        helperText={errors.word ? errors.word.message : ''}
                        error={!!errors.word}
                        defaultValue={data?.word || ''}
                        fullWidth
                        id="standard-textarea"
                        type="text"
                        variant="standard"
                        label="Редактировать дигорское слово"
                    />
                    <TextField
                        {...register('translate')}
                        helperText={errors.translate ? errors.translate.message : ''}
                        error={!!errors.translate}
                        sx={{ mt: 2 }}
                        fullWidth
                        id="standard-textarea"
                        defaultValue={data?.translate || ''}
                        label="Редактировать русское слово"
                        variant="standard"
                        type="text"
                    />
                    <Button id="btn_add" type="submit" variant="contained" color="success">
                        Сохранить
                    </Button>
                </Box>
            </Modal>
        </div>
    )
}

export default WordsEdit
