import React from 'react'
import { useDispatch } from 'react-redux'
import '../../App.scss'
import { Header } from '../../components/Header/Header'



import { fetchWords, } from '../../store/structure/words/actionCreators'


const Home: React.FC = () => {

    
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchWords());
      }, [dispatch]);
    

    return (
        <div className='container'>
            <Header/>
            
        </div>
    )
}

export default Home
