import React, { useState, useEffect } from 'react'
import '../../App.scss'
import { Link } from 'react-router-dom'

import moon from './../../assets/moon.png'
import bg from './../../assets/back.jpeg'
import mountain from '../../assets/mountain.png'

const Home: React.FC = () => {
    const [scrollValue, setScrollValue] = useState<any>()
    useEffect(() => {
        window.addEventListener('scroll', () => {
            let value: any = window.scrollY
            setScrollValue(value)
        })
    }, [])
    return (
        <div className="container">
            <header className="header">
                <h1>DZORA</h1>
                <div className="header__link">
                    <Link to="/" style={{ top: -scrollValue * 0.6 + 'px' }}>
                        <span className="link_home">Главная</span>
                    </Link>
                    <Link
                        to="/ansowers"
                        style={{ top: -scrollValue * 0.4 + 'px' }}
                    >
                        <span className="link_ansower">Вопросы/Ответы</span>
                    </Link>
                    <Link
                        to="/login"
                        style={{ top: -scrollValue * 0.2 + 'px' }}
                    >
                        <span className="link_login">Войти</span>
                    </Link>
                </div>
            </header>
            <section>
                <img
                    src={bg}
                    style={{ top: -scrollValue * 0.3 + 'px' }}
                    alt=""
                    id={'bg'}
                />

                <img
                    src={moon}
                    style={{ left: -scrollValue * 0.5 + 'px' }}
                    alt="sad"
                    id="moon"
                />

                <img src={mountain} alt="" id={'mountain'} />

                <h2 style={{ top: scrollValue * 0.5 + 'px' }} id={'text'}>
                    ОСЕТИЯ
                </h2>
            </section>
        </div>
    )
}

export default Home
