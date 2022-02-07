import React, { useEffect, useState } from 'react'
import '../../App.scss'
import { useDispatch, useSelector } from 'react-redux'
import { deleteWords, fetchWords } from '../../store/ducks/words/actionCreators'
import { useNavigate } from 'react-router-dom'
import {
    currentPageWords,
    lastPageWords,
    selectWordsVerify,
} from '../../store/ducks/words/selectors'

import SearchIcon from '@mui/icons-material/Search'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import EditIcon from '@mui/icons-material/Edit'

const WordsVerify: React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [page, setPage] = useState<number>(1)
    const data = useSelector(selectWordsVerify)
    const last_page = useSelector(lastPageWords)
    const current_page = useSelector(currentPageWords)

    const handleChange = (event: any, value: any) => {
        setPage(value)
    }

    const onEditClick = (id: string) => navigate(`/list/${id}`)

    const handlePage = (id: string) => {
        dispatch(deleteWords(id, page))
    }

    useEffect(() => {
        dispatch(fetchWords(page))
    }, [dispatch, page])

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
                                    <Tooltip title="Удалить">
                                        <IconButton onClick={() => handlePage(item._id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Редактировать">
                                        <IconButton onClick={() => onEditClick(item._id)}>
                                            <EditIcon />
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

export default WordsVerify
