import { IWords, WordsState } from './../store/structure/words/types/state';
import axios from 'axios'

interface Response<T> {
    status: string;
    data: T;
  }
  

export const wordsApi = {
    
    fetchWords(): Promise<WordsState['items']> {
        // @ts-ignore
        return axios.get('http://localhost:3000/api/words').then(({data}) => data)
    },

    async addWords(payload: {rus_word: string, dig_word: string}): Promise<IWords> {
        const {data} = await axios.post<Response<IWords>>('http://localhost:3000/api/words', payload)
        return data.data
    }
}

