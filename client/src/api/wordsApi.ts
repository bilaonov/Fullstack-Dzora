import { IWords, WordsState } from './../store/ducks/words/types/state'
import axios from 'axios'

interface Response<T> {
    data: T
}

export const wordsApi = {
    async fetchWords(page: number): Promise<Response<WordsState>> {
        const data = await axios.get<Response<WordsState>>(`/api/words/?page=${page}`)
        return data.data
    },
    async addWords(payload: { word: string; translate: string }): Promise<IWords[]> {
        const { data } = await axios.post<Response<IWords[]>>(`/api/words/`, payload)
        return data.data
    },
    async verifyWords(id: string, payload: { verify: boolean }) {
        const data = await axios.put(`/api/words/${id}`, payload)
        return data.data
    },
    async searchWords(searchString: string | null, lang: string) {
        const data = await axios.get(`/api/words/search/${lang}/${searchString}`)
        return data.data
    },
    async deleteWord(id: string): Promise<IWords[]> {
        const { data } = await axios.delete<Response<IWords[]>>(`/api/words/${id}`)
        return data.data
    },
}
