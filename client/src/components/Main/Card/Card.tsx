import React from 'react'
import WordsAdd from '../../Words/WordsAdd'
import './Card.scss'

import add from '../../../assets/ADD.png'
import support from '../../../assets/support.png'
import games from '../../../assets/games.png'

const Card: React.FC = () => {
    return (
        <div>
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
                            <WordsAdd />
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
        </div>
    )
}

export default Card
