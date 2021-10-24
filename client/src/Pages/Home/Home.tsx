import React from 'react'
import '../../App.scss'
import { Link } from 'react-router-dom'
import WordsItem from '../../components/Words/WordsItem'
import WordsAdd from '../../components/Words/WordsAdd'


const Home: React.FC = () => {
    return (
        <div className="container">
            <header className="header">
                <img alt="" width="100" height="100" />
                <div className="header__link">
                    <Link to="/">Главная</Link>
                    <Link to="/ansowers">Вопросы/ Ответы</Link>
                    <Link to="/login">Войти</Link>
                    <Link to="/registration">Регистрация</Link>
                    <WordsAdd/> 
                </div>
            </header>
            <main>
                <WordsItem />
            </main>
        </div>
    )
}

export default Home
