import React from 'react'
import { useSelector } from 'react-redux'
import { searchWordsItems } from '../../store/ducks/words/selectors'

import './Words.scss'

const WordsSearch: React.FC = () => {
    const item = useSelector(searchWordsItems)

    return (
        <div className="searchWords">
            <div className="searchWords__words">
                {item &&
                    item.map((word: any) => (
                        <p key={word._id}>
                            {word.word} - {word.translate}
                        </p>
                    ))}
            </div>
        </div>
    )
}

export default WordsSearch
