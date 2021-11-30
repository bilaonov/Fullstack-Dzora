import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import './App.scss'
import Home from './Pages/Home/Home'
import { setAuth } from './store/ducks/user/actionCreators'

const App: React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setAuth())
    }, [dispatch])
    return (
        <Switch>
            <Route strict path="/" component={Home} />
        </Switch>
    )
}

export default App
