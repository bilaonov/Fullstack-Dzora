import React, { useState } from 'react'
import '../../App.scss'
import WordsNoVerify from './WordsNoVerify'
import WordsVerify from './WordsVerify'

const WordsItem = () => {
    const [open, setOpen] = React.useState(false)
    const [visible, setVisible] = useState(false)

    const handleClickNoVerify = (): void => {
        setVisible(false)
    }

    const handleClickVerify = (): void => {
        setVisible(true)
    }

    return (
        <div className="words">
            <div className="words__select">
                <h3 onClick={handleClickNoVerify}>Список не проверенных слов</h3>
                <h3 onClick={handleClickVerify}>Список добавленных слов</h3>
            </div>
            <div className="words__list">
                {visible === true ? <WordsVerify/> : <WordsNoVerify/>}
            </div>
        </div>
    )
}

export default WordsItem
