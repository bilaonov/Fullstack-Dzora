import React from 'react'
import { ModalBlock } from '../../../components/ModalBlock/ModalBlock'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { registerSchema } from '../../../services/helpers/validation'
import { useDispatch } from 'react-redux'
import { setRegistr } from '../../../store/ducks/user/actionCreators'

interface RegisterModalProps {
    open: boolean
    onClose: () => void
}

interface IFormInput {
    name: string
    email: string
    password: string
    password2: string
}

const Register: React.FC<RegisterModalProps> = ({ open, onClose }) => {
    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>({
        resolver: yupResolver(registerSchema),
    })

    const onSubmit = (data: IFormInput) => {
        dispatch(setRegistr(data))
        onClose()
    }

    return (
        <ModalBlock onClose={onClose} visible={open} title="Регистрация">
            <form id="form" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <TextField
                        fullWidth
                        label="Введите имя"
                        placeholder="Введите имя"
                        helperText={errors.name ? errors.name.message : ''}
                        error={!!errors.name}
                        {...register('name')}
                        variant="standard"
                    />

                    <TextField
                        fullWidth
                        id="standard-textarea"
                        label="Введите почту"
                        placeholder="Введите почту"
                        variant="standard"
                        helperText={errors.email ? errors.email.message : ''}
                        error={!!errors.email}
                        {...register('email')}
                        autoComplete="email"
                    />

                    <TextField
                        fullWidth
                        id="standard-textarea"
                        label="Введите пароль"
                        placeholder="Введите пароль"
                        variant="standard"
                        type="password"
                        helperText={errors.password ? errors.password.message : ''}
                        error={!!errors.password}
                        {...register('password')}
                    />

                    <TextField
                        fullWidth
                        type="password"
                        id="standard-textarea"
                        label="Введите повторно пароль"
                        placeholder="Введите пароль"
                        variant="standard"
                        helperText={errors.password2 ? errors.password2.message : ''}
                        error={!!errors.password2}
                        {...register('password2')}
                    />

                    <Button variant="contained" color="primary" onClick={onClose}>
                        Назад
                    </Button>
                    <Button type="submit" variant="contained" color="success">
                        Регистрация
                    </Button>
                </div>
            </form>
        </ModalBlock>
    )
}

export default Register
