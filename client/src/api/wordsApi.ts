import { IWords, WordsState } from './../store/ducks/words/types/state'
import axios from 'axios'

interface Response<T> {
    data: T
}

const url = 'http://localhost:5000/api/words/'
const url2 = 'http://localhost:5000/api/words/search/'

export const wordsApi = {
    async fetchWords(): Promise<Response<WordsState['items']>> {
        const data = await axios.get<Response<WordsState['items']>>(
            '/api/words/'
        )
        return data.data
    },
    async addWords(payload: {
        word: string
        translate: string
    }): Promise<IWords[]> {
        const { data } = await axios.post<Response<IWords[]>>(
            '/api/words/',
            payload
        )
        return data.data
    },
    async searchWords(searchString: string): Promise<WordsState['items']> {
        const data = await axios.get<Response<WordsState['items']>>(
            '/api/words/search/' + searchString
        )
        //@ts-ignore
        return data.data
    },
    async deleteWord(id: string): Promise<IWords[]> {
        const { data } = await axios.delete<Response<IWords[]>>(
            '/api/words/' + id
        )

        return data.data
    },
}
