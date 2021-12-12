import React, { useState, useEffect } from 'react'
import './Header.scss'

import Auth from '../../Pages/Auth/Auth'
import { selectAuth } from '../../store/ducks/user/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../store/ducks/user/actionCreators'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import IconButton from '@mui/material/IconButton'

const Header: React.FC = () => {
    const [scrollValue, setScrollValue] = useState<any>()
    useEffect(() => {
        window.addEventListener('scroll', () => {
            let value: any = window.scrollY
            setScrollValue(value)
        })
    }, [])

    const dispatch = useDispatch()
    const { data }: any = useSelector(selectAuth)

    const logoutUser = () => {
        dispatch(logout())
    }

    return (
        <div>
            <header className="header" style={{ top: -scrollValue * 0.3 + 'px' }}>
                <h1>DZORA</h1>
                {data ? (
                    <div className="header__link">
                        <p>
                            {data.name}
                            <IconButton aria-label="Example" onClick={logoutUser}>
                                <ExitToAppIcon />
                            </IconButton>
                        </p>
                    </div>
                ) : (
                    <div className="header__link">
                        <Auth />
                    </div>
                )}
            </header>
        </div>
    )
}

export default Header
