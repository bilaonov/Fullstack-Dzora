import React from 'react'
import { Switch, Route} from 'react-router-dom'
import './App.scss'
import Home from './Pages/Home/Home'

const App = () => {
  return (
    <Switch>
      <Route strict path="/" component={Home}/>
      
    </Switch>
  )
}

export default App

