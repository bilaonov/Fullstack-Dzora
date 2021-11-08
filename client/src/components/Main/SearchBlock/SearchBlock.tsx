import React, { useState } from 'react'
import './SearchBlock.scss'
import Searchimg from '../../../assets/SearchIcon.png'
import imgplaces from '../../../assets/arrow.png'
import mediaQuery from '../../../utils/mediaQuery'
import { searchWords } from '../../../store/ducks/words/actionCreators'
import { useDispatch } from 'react-redux'

const SearchBlock: React.FC = () => {
    const [clickLang, setClickLang] = useState(false)
    const [text, setText] = useState('')
    const [error, setError] = useState('')

    const placeholder = mediaQuery({
        'min-768': `Найти слово на ${
            clickLang === true ? 'дигорском' : 'русском'
        }`,
        'max-768': 'Поиск слова',
    })

    const toggleClick = () => {
        setClickLang(!clickLang)
    }

    const dispatch = useDispatch()

    const submitAddWord: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        if (!text) {
            setError('Пожалуйста заполните все поля')
        } else {
            
            dispatch(searchWords(text))
            setText('')
        }
    }

    return (
        <div>
            <div className="search">
                <h1>Дигорско-русский онлайн словарь</h1>
                <form className="search-block"
                onSubmit={submitAddWord}
                >
                    <img
                        className="search-block__img"
                        src={Searchimg}
                        alt="img"
                    />
                    <input
                        name="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="search-block__text-input"
                        type="text"
                        placeholder={placeholder}
                    />
                    <div
                        className="search-block__text-reverse"
                        onClick={toggleClick}
                    >
                        <span>{clickLang === true ? 'ДИГ' : 'РУС'}</span>
                        <img
                            src={imgplaces}
                            width="15px"
                            height="15px"
                            alt="img"
                        />
                        <span>{clickLang !== true ? 'ДИГ' : 'РУС'}</span>
                    </div>
                    <input
                        className="search-block__text-btn"
                        type="submit"
                        value="НАЙТИ"
                    />
                </form>
            </div>
        </div>
    )
}

export default SearchBlock
