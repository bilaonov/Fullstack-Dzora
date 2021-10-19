import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import logo from '../../images/dzora_logo.png'
import WordsAdd from '../Words/WordsAdd'


export const Header: React.FC = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" width='100' height='100' />
            <div className="header__link">
                <Link to='/'>Главная</Link>
                <Link to='/ansowers'>Вопросы/ Ответы</Link>
                
                <Link to='/login'>Войти</Link>
                <Link to='/registration'>Регистрация</Link>
                <WordsAdd/>
            </div>
        </div>
    )
}
