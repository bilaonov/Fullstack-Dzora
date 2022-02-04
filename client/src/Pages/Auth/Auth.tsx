/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react'

import Button from '@mui/material/Button'

import { useState } from 'react'

import Login from './Login/Login'

const Auth: React.FC = () => {
    const [open, setOpen] = React.useState(false)

    const [visibleModal, setVisibleModal] = useState<'Login'>()

    const handleClickOpenLogin = (): void => {
        setVisibleModal('Login')
    }

    const handleCloseModal = (): void => {
        setVisibleModal(undefined)
        setOpen(false)
    }

    return (
        <div id="auth">
            <h3>Чтобы просмотреть список нужно войти в аккаунт</h3>
            <Button sx={{}} onClick={handleClickOpenLogin} id='btn_auth'>
                Войти
            </Button>
            <Login open={visibleModal === 'Login'} onClose={handleCloseModal} />
        </div>
    )
}

export default Auth
