import React, { useEffect, useState } from 'react'
import '../../App.scss'
import { useDispatch, useSelector } from 'react-redux'
import { deleteWords, fetchWords } from '../../store/ducks/words/actionCreators'
import {
    currentPageWords,
    lastPageWords,
    selectWordsVerify,
} from '../../store/ducks/words/selectors'

import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import SearchIcon from '@mui/icons-material/Search'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}))

const WordsVerify: React.FC = () => {
    const dispatch = useDispatch()

    const [page, setPage] = useState<number>(1)

    const data = useSelector(selectWordsVerify)
    const last_page = useSelector(lastPageWords)
    const current_page = useSelector(currentPageWords)

    const handleChange = (event: any, value: any) => {
        setPage(value)
    }

    useEffect(() => {
        dispatch(fetchWords(page))
    }, [dispatch, page])

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 400, maxWidth: 900 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="left">Слова на дигорском</StyledTableCell>
                            <StyledTableCell align="center">Слова на русском</StyledTableCell>
                            <StyledTableCell align="right">
                                <SearchIcon />
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item: any) => (
                            <StyledTableRow key={item._id}>
                                <StyledTableCell align="left">{item.word}</StyledTableCell>
                                <StyledTableCell align="center">{item.translate}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <Button
                                        sx={{ mr: 2 }}
                                        size="small"
                                        onClick={() => dispatch(deleteWords(item._id))}
                                        variant="outlined"
                                        color="error"
                                    >
                                        Удалить
                                    </Button>
                                    <Button size="small" variant="contained" color="success">
                                        Редактировать
                                    </Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
                <Stack spacing={2} sx={{ mt: 3, mb: 2 }}>
                    <Pagination
                        onChange={handleChange}
                        page={current_page}
                        count={last_page}
                        color="primary"
                    />
                </Stack>
            </TableContainer>
        </>
    )
}

export default WordsVerify
