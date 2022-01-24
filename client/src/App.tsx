import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.scss'
import Header from './components/Header/Header'
import WordsItem from './components/Words/WordsItem'
import Home from './Pages/Home/Home'

const App: React.FC = () => {
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
