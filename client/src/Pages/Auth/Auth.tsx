import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { useState } from 'react'
import Register from './Register/Register'
import Login from './Login/Login'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '4px ',
    boxShadow: 24,
    p: 4,
}

const Auth: React.FC = () => {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const [visibleModal, setVisibleModal] = useState<'Login' | 'Register'>()

    const handleClickOpenLogin = (): void => {
        setVisibleModal('Login')
    }

    const handleClickOpenRegister = (): void => {
        setVisibleModal('Register')
    }

    const handleCloseModal = (): void => {
        setVisibleModal(undefined)
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
                <Box sx={style}>
                    <h3>Присоединяйтесь</h3>
                    <Typography sx={{ mt: 2 }}>
                        Добро пожаловать на онлайн переводчик чтобы вы могли добавить слова нужно
                        зарегистрироваться выберите одну из вариантов
                    </Typography>
                    <Button
                        sx={{ mt: 3 }}
                        onClick={handleClickOpenLogin}
                        variant="outlined"
                        color="primary"
                        fullWidth
                    >
                        Войти
                    </Button>
                    <Button
                        sx={{ mt: 1 }}
                        onClick={handleClickOpenRegister}
                        variant="contained"
                        color="primary"
                        fullWidth
                    >
                        Зарегистрироваться
                    </Button>
                </Box>
            </Modal>
            <Login open={visibleModal === 'Login'} onClose={handleCloseModal} />
            <Register open={visibleModal === 'Register'} onClose={handleCloseModal} />
        </div>
    )
}

export default Auth
