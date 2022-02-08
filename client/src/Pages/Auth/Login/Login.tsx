import React, { useCallback } from 'react'
import '../../../App.scss'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { ModalBlock } from '../../../components/ModalBlock/ModalBlock'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginData } from '../../../store/ducks/user/types/state'
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
    } = useForm<LoginData>({
        resolver: yupResolver(loginSchema),
    })

    const onSubmit = useCallback(
        (data: LoginData) => {
            dispatch(login(data))

            onClose()
        },
        [dispatch, onClose],
    )

    return (
        <ModalBlock visible={open} onClose={onClose} title="Войти в аккаунт">
            <Box
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                autoComplete="off"
                component="form"
                className="form"
            >
                <TextField
                    fullWidth
                    id="standard-textarea"
                    label="Введите почту"
                    placeholder="Введите почту"
                    variant="filled"
                    {...register('email')}
                    helperText={errors.email ? errors.email.message : ''}
                    error={!!errors.email}
                />
                <TextField
                    sx={{ mt: 2 }}
                    fullWidth
                    id="standard-textarea"
                    label="Введите пароль"
                    placeholder="Введите пароль"
                    variant="filled"
                    type="password"
                    {...register('password')}
                    helperText={errors.password ? errors.password.message : ''}
                    error={!!errors.password}
                />

                <Button type="submit" variant="contained" color="success">
                    Войти
                </Button>
            </Box>
        </ModalBlock>
    )
}

export default Login
