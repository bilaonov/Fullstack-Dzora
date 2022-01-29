//@ts-nocheck
import React from 'react'
import { useSelector } from 'react-redux'
import { searchWordsItems } from '../../store/ducks/words/selectors'

interface Props {
    clickLang: boolean
}

const WordsSearch: React.FC<Props> = ({ clickLang }) => {
    const items = useSelector(searchWordsItems)
    return (
        <>
            {items?.map((item: any) => (
                <div className="search__results results">
                    <div className="results__items">
                        {!clickLang ? (
                            <div className="results__text">
                                {item.translate} - {item.word}
                            </div>
                        ) : (
                            <div className="results__text">
                                {item.word} - {item.translate}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </>
    )
}

export default WordsSearch
