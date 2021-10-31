import React from 'react'
import './Footer.scss'
import instagramm from '../../assets/instagram logo.png'
import vk from '../../assets/vk_icon.png'
import telegram from '../../assets/telegram.png'

const Footer: React.FC = () => {
    return (
        <div>
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

export default Footer
