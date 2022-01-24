import React from 'react'
import instagram from '../../assets/insta.png'
import telegram from '../../assets/telegra.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__item">
                <a href="/">
                    <img src={instagram} alt="" /> INSTAGRAM
                </a>
                <a href="/">
                    TELEGRAM
                    <img src={telegram} alt="" />
                </a>
            </div>
            <div className="footer__info">
                <p>
                    © 2021 <br />
                    Bilaonoff
                </p>
                <p>РАЗРАБОТКА САЙТОВ И ПОДДЕРЖКИ ПИСАТЬ НА ПОЧТУ AMIRANBILAONOV@GMAIL.COM</p>
            </div>
        </div>
    )
}

export default Footer
