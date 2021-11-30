import React from 'react'
import '../../App.scss'

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
                <WordsSearch />
                <Card />
                <p className="homeText">
                    DZORA.RU Современный сайт c новейшими технологиями и
                    быстротой
                    <br />
                    <br />
                    Словари онлайн – это один из самых популярных и доступных к
                    использованию сервисов, который содержит в себе полезную
                    информацию , затрагивающую все известные нам, а при успешном
                    использовании и Вам так же, сферы человеческой деятельности,
                    развития, культуры, языков и не только. В мире молниеносного
                    потока информации и каждодневных открытий, сервис dzora.ru
                    станет для Вас незаменимым помощником, толкователем,
                    переводчиком и даже развлекателем, как уже стал для многих
                    других пользователей этого незатейливого и очень удобного
                    онлайн ресурса о словарях.
                    <br />
                    <br />
                    Сейчас в словаре 1000 слов и по мере возможности будут
                    пополняться каждый день
                    <br />
                    или вы можете помочь проекту и добавить Дигорские слова в
                    словарь с переводом заранее спасибо!
                </p>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Home
