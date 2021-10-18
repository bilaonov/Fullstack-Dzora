import { IWords } from './../store/structure/words/types/state';
import axios from 'axios'

interface Response<T> {
    status: string,
    data: T
}

export const wordsApi = {
    async fetchWords(): Promise<IWords[]> {
        const {data} = await axios.get<Response<IWords[]>>('http://localhost:5000/api/words/')
        return data.data
    }

}