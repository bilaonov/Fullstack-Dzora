import React from 'react'
import '../../App.scss'
import WordsItem from '../../components/Words/WordsItem'


import Card from '../../components/Main/Card/Card'
import SearchBlock from '../../components/Main/SearchBlock/SearchBlock'
import Section from '../../components/Main/Section/Section'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import WordsSearch from '../../components/Words/WordsSearch'

const Home: React.FC = () => {
    return (
        <div className="container">
            <header>
                <Header />
            </header>

            <main>
                <Section />
                <SearchBlock />
                <WordsSearch/>
                <Card />
            </main>

            <footer>
                <Footer />
            </footer>
            <WordsItem/>
        </div>
    )
}

export default Home
