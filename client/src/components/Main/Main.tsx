import React, { useState } from 'react'
import { searchWords } from '../../store/ducks/words/actionCreators'
import { useDispatch, useSelector } from 'react-redux'
import WordsSearch from '../Words/WordsSearch'
import { totalWords } from '../../store/ducks/words/selectors'
import mediaQuery from '../../utils/mediaQuery'
import WordsAdd from '../Words/WordsAdd'

import Searchimg from '../../assets/SearchIcon.png'
import imgplaces from '../../assets/arrow.png'
import Model from '../../scene/Model'
import Button from '@mui/material/Button'

const Main = () => {
    const [clickLang, setClickLang] = useState<boolean>(false)
    const [text, setText] = useState<string>('')
    const [visibleModal, setVisibleModal] = useState<boolean>(false)
    const total = useSelector(totalWords)
    const handleClickOpenWordsAdd = (): void => {
        setVisibleModal(true)
    }

    const handleCloseModal = (): void => {
        setVisibleModal(false)
    }

    const toggleClick = () => {
        setClickLang(!clickLang)
    }

    const placeholder = mediaQuery({
        'min-768': `Введите слово на ${clickLang === true ? 'дигорском' : 'русском'}`,
        'max-768': 'Поиск слова',
    })

    const dispatch = useDispatch()

    const searchHeandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
        if (e.target.value !== '') {
            dispatch(searchWords(e.target.value, clickLang ? 'dig' : 'rus'))
        } else {
            dispatch(searchWords(null, 'dig'))
        }
    }

    return (
        <div className="main">
            <div>
                <h1 className="main__title">
                    Дигорско- <br />
                    русский онлайн <br /> словарь{' '}
                </h1>
            </div>
            <div className="main__search search">
                <Model />
                <div className="search__item">
                    <p>D3OPA</p>
                    <form className="search__form">
                        <div className="search__block">
                            <img
                                className="search__icon"
                                src={Searchimg}
                                width={30}
                                height={30}
                                alt="img"
                            />
                            <input
                                name="text"
                                value={text}
                                onChange={(e) => searchHeandler(e)}
                                type="text"
                                placeholder={placeholder}
                            />
                        </div>
                        <div className="search__blockReverse" onClick={toggleClick}>
                            <span>{clickLang === true ? 'ДИГ' : 'РУС'}</span>
                            <img src={imgplaces} width={15} height={15} alt="img" />
                            <span>{clickLang !== true ? 'ДИГ' : 'РУС'}</span>
                        </div>
                    </form>
                    <WordsSearch clickLang={clickLang} text={text} />
                    <Button
                        onClick={handleClickOpenWordsAdd}
                        variant="contained"
                        className="addWords"
                    >
                        Добавить слово
                    </Button>
                </div>
            </div>
            <div className="main__info">
                <h1 className="main__infoTitle">О ПРОЕКТЕ</h1>
                <p className="main__infoText">
                    DZORA.RU Современный сайт c новейшими технологиями и быстротой
                    <br />
                    <br />
                    Словари онлайн – это один из самых популярных и доступных к использованию
                    сервисов, который содержит в себе полезную информацию , затрагивающую все
                    известные нам, а при успешном использовании и Вам так же, сферы человеческой
                    деятельности, развития, культуры, языков и не только. В мире молниеносного
                    потока информации и каждодневных открытий, сервис dzora.ru станет для Вас
                    незаменимым помощником, толкователем, переводчиком и даже развлекателем, как уже
                    стал для многих других пользователей этого незатейливого и очень удобного онлайн
                    ресурса о словарях.
                    <br />
                    <br />
                    Сейчас в словаре <span id="text_total">{total}</span> слов и по мере возможности
                    будут пополняться каждый день
                    <br />
                    или вы можете помочь проекту и добавить Дигорские слова в словарь с переводом
                    заранее спасибо!
                </p>

            </div>
            <WordsAdd open={visibleModal === true} onClose={handleCloseModal} />
        </div>
    )
}

export default Main
