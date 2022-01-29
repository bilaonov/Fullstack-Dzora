import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { NotificationContainer } from 'react-notifications'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
            <NotificationContainer />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
)
