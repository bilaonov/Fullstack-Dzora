//@ts-nocheck
import React from 'react'
import { useSelector } from 'react-redux'
import { searchWordsItems } from '../../store/ducks/words/selectors'
import NoFoundTitle from '../NoFoundTitle/index'

interface Props {
    clickLang: boolean
    text: string
}

const WordsSearch: React.FC<Props> = ({ clickLang, text }) => {
    const items = useSelector(searchWordsItems)

    return (
        <>
            {items?.length > 0 &&
                items?.map((item: any) => (
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
            {text !== '' && items?.length === 0 && <NoFoundTitle />}
        </>
    )
}

export default WordsSearch
