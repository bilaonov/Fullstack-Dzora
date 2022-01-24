import React from 'react'
import '../../App.scss'
import Footer from '../../components/Footer/Footer'


import Main from '../../components/Main/Main'

const Home: React.FC = () => {
    return (
        <div className="container">
            <Main />
            <Footer/>
        </div>
    )
}

export default Home
