import React, { useEffect } from 'react'
import '../../App.scss'
import { useDispatch, useSelector } from 'react-redux'
import { deleteWords, fetchWords } from '../../store/structure/words/actionCreators'
import { selectWordsItems } from '../../store/structure/words/selectors'

import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import SearchIcon from '@mui/icons-material/Search'
import EditIcon from '@mui/icons-material/Edit'
import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'

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

const WordsItem = () => {
    const dispatch = useDispatch()
    const items = useSelector(selectWordsItems)

    useEffect(() => {
        dispatch(fetchWords())
    }, [dispatch])

    return (
        <TableContainer component={Paper}>
            <Table
                sx={{ minWidth: 400, maxWidth: 800, mt: 5 }}
                aria-label="customized table"
            >
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="left">
                            слова на дигорском
                        </StyledTableCell>
                        <StyledTableCell align="center">
                            на русском
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            <SearchIcon />
                        </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map((item) => (
                        <StyledTableRow key={item._id}>
                            <StyledTableCell align="left">
                                {item.dig_word}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {item.rus_word}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                <IconButton>
                                    <EditIcon />
                                </IconButton>
                                <IconButton onClick={(e) => dispatch(deleteWords(item._id))}>
                                    <CloseIcon/>
                                </IconButton>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default WordsItem
