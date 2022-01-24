import React, { useState } from 'react'
import { searchWords } from '../../store/ducks/words/actionCreators'
import { useDispatch } from 'react-redux'
import mediaQuery from '../../utils/mediaQuery'
import WordsAdd from '../Words/WordsAdd'
import Searchimg from '../../assets/SearchIcon.png'
import imgplaces from '../../assets/arrow.png'
import image from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/105-digoriya-severnaya-osetiya 1.png'

import Model from '../../scene/Model'

import Button from '@mui/material/Button'
import WordsSearch from '../Words/WordsSearch'

const Main = () => {
    const [clickLang, setClickLang] = useState(false)
    const [text, setText] = useState('')

    const [visibleModal, setVisibleModal] = useState(false)

    const handleClickOpenWordsAdd = (): void => {
        setVisibleModal(true)
    }

    const handleCloseModal = (): void => {
        setVisibleModal(false)
    }

    const placeholder = mediaQuery({
        'min-768': `Найти слово на ${clickLang === true ? 'дигорском' : 'русском'}`,
        'max-768': 'Поиск слова',
    })

    const toggleClick = () => {
        setClickLang(!clickLang)
    }

    const dispatch = useDispatch()

    const searchHeandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
        if (e.target.value !== '') {
            dispatch(searchWords(e.target.value))
        } else {
            dispatch(searchWords(null))
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
                    <WordsSearch />
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
                    Повседневная практика показывает, что реализация намеченных плановых заданий в
                    значительной степени обуславливает создание модели развития. С другой стороны
                    укрепление и развитие структуры обеспечивает участие в формировании систем
                    массового участия. Не следует, однако забывать, что дальнейшее развитие
                    различных форм деятельности способствует подготовки и реализации форм развития.
                    С другой стороны постоянное информационно-пропагандистское обеспечение нашей
                    деятельности обеспечивает широкому кругу (специалистов) участие в формировании
                    позиций, занимаемых участниками в отношении поставленных задач. Повседневная
                    практика показывает, что реализация намеченных плановых заданий в значительной
                    степени обуславливает создание модели развития. Идейные соображения высшего
                    порядка, а также рамки и место обучения кадров обеспечивает широкому кругу
                    (специалистов) участие в формировании новых предложений.
                </p>
                <h1 className="main__infoTitle2">ИСТОРИЯ ДИГОРСКОГО ДИОЛЕКТА</h1>
                <div className="main__infoBlock">
                    <p className="main__infoText2">
                        Не следует, однако забывать, что дальнейшее развитие различных форм
                        деятельности способствует подготовки и реализации форм развития. Значимость
                        этих проблем настолько очевидна, что консультация с широким активом играет
                        важную роль в формировании новых предложений. Равным образом рамки и место
                        обучения кадров влечет за собой процесс внедрения и модернизации системы
                        обучения кадров, соответствует насущным потребностям. Таким образом новая
                        модель организационной деятельности способствует подготовки и реализации
                        систем массового участия. Равным образом рамки и место обучения кадров
                        влечет за собой процесс внедрения и модернизации системы обучения кадров,
                        соответствует насущным потребностям. Таким образом новая модель
                        организационной деятельности способствует подготовки и реализации систем
                        массового участия.
                    </p>
                    <img className="main__infoImage" src={image} width={655} height={459} alt="" />
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
                        Не следует, однако забывать, что дальнейшее развитие различных форм
                        деятельности способствует подготовки и реализации форм развития. Значимость
                        этих проблем настолько очевидна, что консультация с широким активом играет
                        важную роль в формировании новых предложений. Равным образом рамки и место
                        обучения кадров влечет за собой процесс внедрения и модернизации системы
                        обучения кадров, соответствует насущным потребностям. Таким образом новая
                        модель организационной деятельности способствует подготовки и реализации
                        систем массового участия. Равным образом рамки и место обучения кадров
                        влечет за собой процесс внедрения и модернизации системы обучения кадров,
                        соответствует насущным потребностям. Таким образом новая модель
                        организационной деятельности способствует подготовки и реализации систем
                        массового участия.
                    </p>
                </div>
                <h1 className="main__infoTitle4">ВИРТУАЛЬНЫЙ ТУР ПО ДИГОРИИ</h1>
                <img className="main__infoImage2" src={image3} width={1000} height={650} alt="" />
                <p className="main__infoText4">Видео взято с канала Виртуальные туры по Осетии</p>
            </div>
            <WordsAdd open={visibleModal === true} onClose={handleCloseModal} />
        </div>
    )
}

export default Main
