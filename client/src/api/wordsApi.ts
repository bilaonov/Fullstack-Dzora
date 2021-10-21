import { IWords, WordsState } from './../store/structure/words/types/state';
import axios from 'axios'

interface Response<T> {

    data: T | null;
  }
  
const url = 'http://localhost:3000/api/words/'

export const wordsApi = {
    
    async fetchWords(): Promise<Response<WordsState['items']>> { 
      const data = await axios.get<Response<WordsState['items']>>(url);
        return data.data;
    },
    async addWords(payload: {rus_word: string, dig_word: string}): Promise<WordsState> {
        const data = await axios.post<Response<WordsState>>(url, payload)
        //@ts-ignore
        return data.data
    }
}

