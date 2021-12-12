import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.scss'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import WordsItem from './components/Words/WordsItem'
import Home from './Pages/Home/Home'

const App: React.FC = () => {
    return (
        <div>
            <Route component={Header}/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/list" component={WordsItem} />
            </Switch>
            <Route component={Footer}/>
        </div>
    )
}

export default App
