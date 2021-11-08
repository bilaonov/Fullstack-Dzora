import React, { useState } from 'react'
import './Words.scss'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { addWords } from '../../store/ducks/words/actionCreators'
import { useDispatch } from 'react-redux'

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
    const [open, setOpen] = useState(false)
    const [dig_word, setDigWord] = useState<string>('')
    const [rus_word, setRusWord] = useState<string>('')
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
        if (!dig_word || !rus_word) {
            setError('Пожалуйста заполните все поля')
        } else {
            dispatch(addWords({ rus_word, dig_word }))
            setDigWord('')
            setRusWord('')
            setOpen(false)
        }
    }

    return (
        <div>
            <p onClick={handleOpen} id={'openModal'}>
                Добавить слово
            </p>
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
                        value={dig_word}
                        id="standard-textarea"
                        label="Добавить слово на дигорском"
                        placeholder="Введите слово на дигорском"
                        onChange={(e) => setDigWord(e.target.value)}
                        variant="standard"
                    />
                    <TextField
                        onChange={(e) => setRusWord(e.target.value)}
                        fullWidth
                        value={rus_word}
                        id="standard-textarea"
                        label="Добавить слово на русском"
                        placeholder="Введите слово на русском"
                        variant="standard"
                    />
                    <Button
                        sx={{ mt: 3, mr: 2 }}
                        variant="outlined"
                        onClick={handleClose}
                    >
                        Отменить
                    </Button>
                    <Button
                        type="submit"
                        sx={{ mt: 3 }}
                        variant="contained"
                        color="success"
                    >
                        Добавить
                    </Button>
                </Box>
            </Modal>
        </div>
    )
}

export default WordsAdd
