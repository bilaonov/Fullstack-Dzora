import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import '../../App.scss'
import Auth from '../../Pages/Auth/Auth'

import { isAuth } from '../../store/ducks/user/selectors'
import WordsNoVerify from './WordsNoVerify'
import WordsVerify from './WordsVerify'

const WordsItem = () => {
    const [visible, setVisible] = useState(true)
    const auth = useSelector(isAuth)
    const handleClickNoVerify = (): void => {
        setVisible(false)
    }

    const handleClickVerify = (): void => {
        setVisible(true)
    }

    return (
        <>
            {!auth ? (
                <Auth />
            ) : (
                <div className="words">
                    <div className="words__select">
                        <h3 onClick={handleClickVerify}>Список добавленных слов</h3>
                        <h3 onClick={handleClickNoVerify}>Список не проверенных слов</h3>
                    </div>
                    <div className="words__list">
                        {visible === true ? <WordsVerify /> : <WordsNoVerify />}
                    </div>
                </div>
            )}
        </>
    )
}

export default WordsItem
