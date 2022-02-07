import React, { useEffect, useState } from 'react'
import '../../App.scss'
import { useDispatch, useSelector } from 'react-redux'
import { deleteWords, fetchWords, verifyWords } from '../../store/ducks/words/actionCreators'
import {
    currentPageWords,
    lastPageWords,
    selectWordsNoVerify,
} from '../../store/ducks/words/selectors'

import SearchIcon from '@mui/icons-material/Search'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import AddIcon from '@mui/icons-material/Add'

const WordsNoVerify = () => {
    const dispatch = useDispatch()

    const [verif] = useState<boolean>(true)
    const [page, setPage] = useState<number>(1)

    const data = useSelector(selectWordsNoVerify)
    const last_page = useSelector(lastPageWords)
    const current_page = useSelector(currentPageWords)

    const handleChange = (event: any, value: any) => {
        setPage(value)
    }

    const handleClick = (id: string) => {
        const data = {
            verify: verif,
        }
        dispatch(verifyWords(id, page, data))
    }

    const handlePage = (id: string) => {
        dispatch(deleteWords(id, page))
    }

    useEffect(() => {
        dispatch(fetchWords(page))
    }, [dispatch, page])

    if (data.length === 0) {
        return <div id="textdata">Список не проверенных слов пуст.</div>
    }

    return (
        <>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th align="left">Слова на дигорском</th>
                            <th align="center">Слова на русском</th>
                            <th align="right">
                                <SearchIcon />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item: any) => (
                            <tr key={item._id}>
                                <td align="left">{item.word}</td>
                                <td align="center">{item.translate}</td>
                                <td align="right">
                                    <Tooltip title="Отменить">
                                        <IconButton onClick={() => handlePage(item._id)}>
                                            <CloseIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Добавить">
                                        <IconButton onClick={() => handleClick(item._id)}>
                                            <AddIcon />
                                        </IconButton>
                                    </Tooltip>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Stack spacing={2} sx={{ mt: 3, mb: 2 }}>
                    <Pagination
                        onChange={handleChange}
                        page={current_page}
                        count={last_page}
                        color="primary"
                    />
                </Stack>
            </div>
        </>
    )
}

export default WordsNoVerify
