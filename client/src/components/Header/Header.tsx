import React, { useState, useEffect } from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
    const [scrollValue, setScrollValue] = useState<any>()
    useEffect(() => {
        window.addEventListener('scroll', () => {
            let value: any = window.scrollY
            setScrollValue(value)
        })
    }, [])
    return (
        <div>
            <header className="header" style={{ top: -scrollValue * 0.3 + 'px' }}>
                <h1>DZORA</h1>
                <div className="header__link">
                    <Link to="/">
                        <span className="link_home">Главная</span>
                    </Link>
                    <Link to="/ansowers">
                        <span className="link_ansower">Вопросы/Ответы</span>
                    </Link>
                    <Link to="/login">
                        <span className="link_login">Войти</span>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default Header
