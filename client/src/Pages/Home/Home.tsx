import React, { useState, useEffect } from 'react'
import '../../App.scss'
import { Link } from 'react-router-dom'

import moon from './../../assets/moon.png'
import bg from './../../assets/back.jpeg'
import mountain from '../../assets/mountain.png'
import add from '../../assets/ADD.png'
import support from '../../assets/support.png'
import games from '../../assets/games.png'
import Searchimg from '../../assets/SearchIcon.png'
import imgplaces from '../../assets/arrow.png'
import mediaQuery from '../../utils/mediaQuery'
import instagramm from '../../assets/instagram logo.png'
import vk from '../../assets/vk_icon.png'
import telegram from '../../assets/telegram.png'

const Home: React.FC = () => {
    const [clickLang, setClickLang] = useState(false)

    const toggleClick = () => {
        setClickLang(!clickLang)
    }

    const placeholder = mediaQuery({
        'min-768': `Найти слово на ${
            clickLang === true ? 'дигорском' : 'русском'
        }`,
        'max-768': 'Поиск слова',
    })

    const [scrollValue, setScrollValue] = useState<any>()
    useEffect(() => {
        window.addEventListener('scroll', () => {
            let value: any = window.scrollY
            setScrollValue(value)
        })
    }, [])
    return (
        <div className="container">
            <header
                className="header"
                style={{ top: -scrollValue * 0.2 + 'px' }}
            >
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

                <h2>ОСЕТИЯ</h2>
            </section>

            <main>
                <div className="search">
                    <h1>Дигорско-русский онлайн словарь</h1>
                    <form className="search-block">
                        <img className="search-block__img" src={Searchimg}  alt='img'/>
                        <input
                            className="search-block__text-input"
                            type="text"
                            placeholder={placeholder}
                        />
                        <div
                            className="search-block__text-reverse"
                            onClick={toggleClick}
                        >
                            <span>{clickLang === true ? 'ДИГ' : 'РУС'}</span>
                            <img src={imgplaces} width="15px" height="15px"  alt='img'/>
                            <span>{clickLang !== true ? 'ДИГ' : 'РУС'}</span>
                        </div>
                        <input
                            className="search-block__text-btn"
                            type="submit"
                            value="НАЙТИ"
                        />
                    </form>
                </div>

                <div className="card">
                    <div className="card__container">
                        <div className="card__box">
                            <div className="card__content">
                                <img
                                    src={add}
                                    alt=""
                                    width="100px"
                                    height="100px"
                                />
                                <h3>Добавить слова</h3>
                                <p>Вы можете помочь проекту и добавить слова</p>
                                <a href="/">Добавить слово</a>
                            </div>
                        </div>
                    </div>
                    <div className="card__container">
                        <div className="card__box">
                            <div className="card__content">
                                <img
                                    src={support}
                                    alt=""
                                    width="100px"
                                    height="100px"
                                />
                                <h3>Написать в поддержку</h3>
                                <p>Если есть какие нибудь вопросы пишите</p>
                                <a href="/">Написать</a>
                            </div>
                        </div>
                    </div>
                    <div className="card__container">
                        <div className="card__box">
                            <div className="card__content">
                                <img
                                    src={games}
                                    alt=""
                                    width="100px"
                                    height="100px"
                                />
                                <h3>Игровой режим</h3>
                                <p>Скоро в проекте будут несколько игр</p>
                                <a href="/">Играть</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="footer">
                <div className="footer__question-block">
                    <h6>Вопросы</h6>
                    <p>По вопросам разработки сайта пишите Bilaonoff@mail.ru</p>
                </div>

                <div className="footer__social-block">
                    <p className="social-block-text">Присоединяйтесь</p>
                    <div className="social-block-link">
                        <img src={instagramm} alt="img" />
                        <img src={vk} alt="img" />
                        <img src={telegram} alt="img" />
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home
