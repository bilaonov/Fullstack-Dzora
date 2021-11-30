import React, { useState } from 'react'
import './Words.scss'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { addWords } from '../../store/ducks/words/actionCreators'
import { useDispatch, useSelector } from 'react-redux'
import { isAuth } from '../../store/ducks/user/selectors'
import Typography from '@mui/material/Typography'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,

    bgcolor: 'background.paper',
    borderRadius: 1,
    pt: 2,
    px: 4,
    pb: 3,
    '& .MuiTextField-root': { m: 1, width: '400' },
}

const WordsAdd = () => {
    const isAut = useSelector(isAuth)

    const [open, setOpen] = useState(false)
    const [word, setWord] = useState<string>('')
    const [translate, setTranslate] = useState<string>('')
    const [error, setError] = useState('')

    const dispatch = useDispatch()

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const submitAddWord: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        if (!word || !translate) {
            setError('Пожалуйста заполните все поля')
        } else {
            dispatch(addWords({ translate, word }))
            setWord('')
            setTranslate('')
            setOpen(false)
        }
    }

    return (
        <div>
            {isAut ? (
                <p onClick={handleOpen} id={'openModal'}>
                    Добавить слово
                </p>
            ) : (
                <Typography sx={{ mt: 3 }}>Войдите чтобы добавить слова</Typography>
            )}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} component="form" onSubmit={submitAddWord}>
                    {error && <h4 style={{ color: 'red' }}>{error}</h4>}

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
                    <Button sx={{ mt: 3, mr: 2 }} variant="outlined" onClick={handleClose}>
                        Отменить
                    </Button>
                    <Button type="submit" sx={{ mt: 3 }} variant="contained" color="success">
                        Добавить
                    </Button>
                </Box>
            </Modal>
        </div>
    )
}

export default WordsAdd
