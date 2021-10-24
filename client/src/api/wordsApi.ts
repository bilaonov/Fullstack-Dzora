import { IWords, WordsState } from './../store/structure/words/types/state'
import axios from 'axios'

interface Response<T> {
    data: T
}

const url = 'http://localhost:5000/api/words/'

export const wordsApi = {
    async fetchWords(): Promise<Response<WordsState['items']>> {
        const data = await axios.get<Response<WordsState['items']>>(url)
        return data.data
    },
    async addWords(payload: {
        rus_word: string
        dig_word: string
    }): Promise<IWords[]> {
        const { data } = await axios.post<Response<IWords[]>>(url, payload)

        return data.data
    },
    async deleteWord(id: string): Promise<IWords[]> {
        const { data } = await axios.delete<Response<IWords[]>>(url + id)
        
        return data.data
    },
}
