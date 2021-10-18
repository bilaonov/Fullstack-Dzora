import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import '../../App.scss'
import { selectWords } from '../../store/structure/words/selectors'

const Home: React.FC = () => {
    const { wordsData}:any = useSelector(selectWords)
    

    useEffect(() => {
        
    }, [wordsData])

    console.log(wordsData)    
    return (
        <div className='container'>
            Home

        </div>
    )
}

export default Home
