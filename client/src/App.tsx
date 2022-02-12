import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Header from './components/Header/Header'
import WordsItem from './components/Words/WordsItem'
import { Suspense } from 'react'
import Home from './Pages/Home/Home'
import { setAuth } from './store/ducks/user/actionCreators'
import { fetchWords } from './store/ducks/words/actionCreators'
import WordsEdit from './components/Words/WordsEdit'


const App: React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setAuth())
        dispatch(fetchWords(1))
    }, [dispatch])

    return (
        <Suspense fallback={<h1>Loading modal...</h1>}>
            <div className="container">

                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/list" element={<WordsItem />} />
                    <Route path="/list/:id" element={<WordsEdit />} />
                </Routes>
            </div>
        </Suspense>
    )
}

export default App
