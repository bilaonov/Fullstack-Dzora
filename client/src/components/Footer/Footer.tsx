import React from 'react'
import { Link } from 'react-router-dom'
import instagram from '../../assets/insta.png'
import telegram from '../../assets/telegra.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__item">
                <Link to={'/'}>
                    <img src={instagram} alt="" /> INSTAGRAM
                </Link>
                <a href={'https://t.me/dzoraru'} target="_blank" rel="noreferrer">
                    TELEGRAM
                    <img src={telegram} alt="" />
                </a>
            </div>
            <div className="footer__info">
                <p>
                    ПО ВСЕМ ВОПРОСАМ ПИСАТЬ НА ПОЧТУ BILAONOFF@MAIL.RU
                </p>
                <p>
                    © 2021 <br />
                    Bilaonoff
                </p>
            </div>
        </div>
    )
}

export default Footer
