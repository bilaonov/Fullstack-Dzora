import React, { useState, useEffect } from 'react'
import './Header.scss'

import Auth from '../Auth/Auth'

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
            <header
                className="header"
                style={{ top: -scrollValue * 0.3 + 'px' }}
            >
                <h1>DZORA</h1>
                <div className="header__link"> 
                    <Auth />
                </div>
            </header>
        </div>
    )
}

export default Header
