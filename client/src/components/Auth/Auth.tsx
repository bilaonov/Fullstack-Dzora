import React, { useState } from 'react'
import './Auth.scss'
import { useDispatch } from 'react-redux'
import { setRegistr } from '../../store/ducks/user/actionCreators'
import { useForm } from 'react-hook-form'
import { registerSchema } from '../../services/helpers/validation'
import { yupResolver } from '@hookform/resolvers/yup'

import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'

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
    '& .MuiTextField-root': { mt: 1, width: '400' },
}

const Auth: React.FC = () => {
    const dispatch = useDispatch()

    const [open, setOpen] = useState(false)
    const [error, setError] = useState('')
    const [login, setLogin] = useState(true)

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    //@ts-ignore
    const { register, handleSubmit, errors } = useForm<IFormInput>({
        resolver: yupResolver(registerSchema),
    })

    const onSubmit = (data: IFormInput) => {
        dispatch(setRegistr(data))
    }

    interface IFormInput {
        name: string
        email: string
        password: string
        password2: string
    }

    return (
        <div>
            <Button
                sx={{ ml: 25, top: -8, position: 'relative' }}
                onClick={handleOpen}
                id={'openModal'}
            >
                Войти
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {login ? (
                    <Box sx={style} component="form">
                        <div className="modal-title">
                            <Typography variant="h6">Авторизация</Typography>
                            <IconButton onClick={handleClose}>
                                <CloseIcon />
                            </IconButton>
                        </div>

                        <TextField
                            fullWidth
                            id="standard-textarea"
                            label="Введите почту"
                            placeholder="Введите почту"
                            variant="standard"
                        />
                        <TextField
                            fullWidth
                            id="standard-textarea"
                            label="Введите пароль"
                            placeholder="Введите пароль"
                            variant="standard"
                        />
                        <Button
                            sx={{ mt: 3, mr: 2 }}
                            variant="contained"
                            onClick={() => setLogin(false)}
                        >
                            Регистрация
                        </Button>
                        <Button
                            sx={{ mt: 3 }}
                            variant="contained"
                            color="success"
                        >
                            Войти
                        </Button>
                    </Box>
                ) : (
                    <Box
                        sx={style}
                        component="form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="modal-title">
                            <Typography variant="h6">Регистрация</Typography>
                            <IconButton onClick={handleClose}>
                                <CloseIcon />
                            </IconButton>
                        </div>
                        <TextField
                            fullWidth
                            id="standard-textarea"
                            label="Введите имя"
                            placeholder="Введите имя"
                            error={!!errors.name}
                            helperText={errors.name ? errors.name.message : ''}
                            inputRef={register}
                            variant="standard"
                        />

                        <TextField
                            fullWidth
                            id="standard-textarea"
                            label="Введите почту"
                            placeholder="Введите почту"
                            variant="standard"
                            error={!!errors.email}
                            helperText={
                                errors.email ? errors.email.message : ''
                            }
                            inputRef={register}
                            name="email"
                            autoComplete="email"
                        />
                        {error && <h6 style={{ color: 'red' }}>{error}</h6>}
                        <TextField
                            fullWidth
                            id="standard-textarea"
                            label="Введите пароль"
                            placeholder="Введите пароль"
                            variant="standard"
                            type="password"
                            error={!!errors.password}
                            helperText={
                                errors.password ? errors.password.message : ''
                            }
                            inputRef={register}
                            name="password"
                        />
                        {error && <h6 style={{ color: 'red' }}>{error}</h6>}
                        <TextField
                            fullWidth
                            type="password"
                            id="standard-textarea"
                            label="Введите повторно пароль"
                            placeholder="Введите пароль"
                            variant="standard"
                            error={!!errors.password2}
                            helperText={
                                errors.password2 ? errors.password2.message : ''
                            }
                            inputRef={register}
                            name="password2"
                        />
                        <Button
                            sx={{ mt: 3 }}
                            variant="contained"
                            onClick={() => setLogin(true)}
                        >
                            Войти
                        </Button>
                        <Button
                            type="submit"
                            sx={{ mt: 3, ml: 2 }}
                            variant="contained"
                            color="success"
                        >
                            Зарегистрироваться
                        </Button>
                    </Box>
                )}
            </Modal>
        </div>
    )
}

export default Auth
