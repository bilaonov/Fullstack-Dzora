import React from 'react'
import { useSelector } from 'react-redux'
import { searchWordsItems } from '../../store/ducks/words/selectors'
import micro_img from '../../assets/microphone-icon.png'
import play_img from '../../assets/play1.png'

const WordsSearch: React.FC = () => {
    const items = useSelector(searchWordsItems)

    return (
        <>
            {items?.map((item: any) => (
                <div className="search__results results">
                    <div className="results__items">
                        <div className="results__text">
                            {item.word} - {item.translate}
                        </div>
                        <div className="results__itemsIcon">
                            <img src={micro_img} width={30} height={30} alt="" />
                            <img src={play_img} width={30} height={30} alt="" />
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default WordsSearch
