import React from 'react'
import '../Auth.scss'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { ModalBlock } from '../../../components/ModalBlock/ModalBlock'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginData } from '../../../store/ducks/user/types/actionTypes'
import { loginSchema } from '../../../services/helpers/validation'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { login } from '../../../store/ducks/user/actionCreators'

interface LoginModalProps {
    open: boolean
    onClose: () => void
}

const Login: React.FC<LoginModalProps> = ({ open, onClose }) => {
    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
    })

    const onSubmit = (data: LoginData) => {
        dispatch(login(data))
        onClose()
    }

    return (
        <ModalBlock visible={open} onClose={onClose} title="Войти в аккаунт">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box>
                    <TextField
                        fullWidth
                        id="standard-textarea"
                        label="Введите почту"
                        placeholder="Введите почту"
                        variant="standard"
                        {...register('email')}
                        helperText={errors.email ? errors.email.message : ''}
                        error={!!errors.email}
                    />
                    <TextField
                        fullWidth
                        id="standard-textarea"
                        label="Введите пароль"
                        placeholder="Введите пароль"
                        variant="standard"
                        type="password"
                        {...register('password')}
                        helperText={errors.password ? errors.password.message : ''}
                        error={!!errors.password}
                    />
                    <Button sx={{ mt: 3, mr: 2 }} variant="contained">
                        Регистрация
                    </Button>
                    <Button type="submit" sx={{ mt: 3 }} variant="contained" color="success">
                        Войти
                    </Button>
                </Box>
            </form>
        </ModalBlock>
    )
}

export default Login
