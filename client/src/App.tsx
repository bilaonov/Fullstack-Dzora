import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import './App.scss'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import WordsItem from './components/Words/WordsItem'
import Home from './Pages/Home/Home'
import { fetchWords, setWords } from './store/ducks/words/actionCreators'

const App: React.FC = () => {
    const dispatch = useDispatch()

    return (
        <div className="container">
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/list" component={WordsItem} />
            </Switch>
        </div>
    )
}

export default App
