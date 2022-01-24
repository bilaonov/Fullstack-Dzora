import React from 'react'
import '../../App.scss'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <div className="header__item">
                <div className="header__logoText">
                    <Link to="/">D3OPA</Link>
                </div>
            </div>
        </div>
    )
}

export default Header
