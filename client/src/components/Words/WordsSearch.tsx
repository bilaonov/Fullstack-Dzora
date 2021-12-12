import React from 'react'
import { useSelector } from 'react-redux'
import './Words.scss'
import { searchWordsItems } from '../../store/ducks/words/selectors'
import KeyboardVoiceRoundedIcon from '@mui/icons-material/KeyboardVoiceRounded'
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded'
import IconButton from '@mui/material/IconButton'

import './Words.scss'

const style = {
    mr: 1,
}

const WordsSearch: React.FC = () => {
    const item = useSelector(searchWordsItems)

    return (
        <div className="searchWords">
            <div className="searchWords__words">
                {item?.map((word: any) => (
                    <div className="searchWords__results">
                        <p key={word._id}>
                            {word.word} - {word.translate}
                        </p>
                        <IconButton sx={style}>
                            <KeyboardVoiceRoundedIcon />
                        </IconButton>
                        <IconButton sx={style}>
                            <PlayCircleFilledRoundedIcon />
                        </IconButton>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WordsSearch
