import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import './App.scss'
import Header from './components/Header/Header'
import WordsItem from './components/Words/WordsItem'
import Auth from './Pages/Auth/Auth'
import Login from './Pages/Auth/Login/Login'
import Home from './Pages/Home/Home'
import { fetchWords } from './store/ducks/words/actionCreators'

const App: React.FC = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchWords(1))
    })

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
