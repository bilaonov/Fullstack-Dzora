import React, { useState } from 'react'
import { searchWords } from '../../store/ducks/words/actionCreators'
import { useDispatch, useSelector } from 'react-redux'
import WordsSearch from '../Words/WordsSearch'
import { totalWords } from '../../store/ducks/words/selectors'
import mediaQuery from '../../utils/mediaQuery'
import WordsAdd from '../Words/WordsAdd'

import Searchimg from '../../assets/SearchIcon.png'
import imgplaces from '../../assets/arrow.png'
import image from '../../assets/image1.png'
import image2 from '../../assets/image2.jpg'
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
                <h1 className="main__infoTitle2">ИСТОРИЯ ДИГОРСКОГО ДИОЛЕКТА</h1>
                <div className="main__infoBlock">
                    <p className="main__infoText2">
                        Дигорцы владеют иронским диалектом, на который подразделяется осетинский
                        язык. Также они имеют собственный дигорский диалект, отличающийся архаичными
                        чертами. Дигорская письменность появилась практически одновременно с
                        осетинским письмом. С течением времени дигорский стал утрачивать свою
                        значимость, уступая осетинскому литературному языку. С установлением власти
                        Советского Союза дигорский не исчез, на нем выпускали учебники и различные
                        издания. Но по ряду причин власть Советского Союза посчитала алфавит
                        дигорцев носящим контрреволюционный характер. Репрессии в отношении
                        интеллигенции привели к снижению распространенности дигорского диалекта.
                    </p>

                    <img className="main__infoImage" src={image} width={600} height={400} alt="" />
                </div>
                <h1 className="main__infoTitle3">НА НЕМ РАЗГОВАРИВАЮТ</h1>
                <div className="main__infoBlock">
                    <img
                        className="main__infoImage2"
                        src={image2}
                        width={400}
                        height={459}
                        alt=""
                    />
                    <p className="main__infoText3">
                        Диго́рский диалект — один из двух основных языков, на территории Северной
                        Осетии Преимущественно на дигорском языке говорят осетины западной части
                        плоскостной Осетии (Дигорский и Ирафский районы), а также осетины Дигорского
                        ущелья. Дигорские сёла есть в Моздокском районе РСО-А и на востоке
                        Кабардино-Балкарии, значительное число носителей диалекта живёт во
                        Владикавказе. По сравнению с иронским, дигорский язык сохраняет более
                        архаичные черты общего языка-предка.
                    </p>
                </div>
            </div>
            <WordsAdd open={visibleModal === true} onClose={handleCloseModal} />
        </div>
    )
}

export default Main
