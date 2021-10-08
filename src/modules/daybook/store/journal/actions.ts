import journalBaseApi from '@/api/journalApi'
import { AxiosResponse } from 'axios';
import { Entry, NewEntryResponse } from '../../interfaces/entry.interface';


// Actions interact with backend


// Here I can use destructuring to extract 'commit'
export const getEntries = async (context: any) => {
    const response = await journalBaseApi('/entries.json')
    const data: any = response.data

    if (!data) {
        context.commit('setEntries', [])
        return
    }

    const entries: Entry[] = []

    // Useful to transform data from firebase type { ABC: { name: 'Diego', date: '01/01/01' }}
    for (const id of Object.keys(data)) {
        entries.push({
            id,
            ...data[id]
        })
    }

    context.commit('setEntries', entries)
}

export const putEntry = async (context: any, entry: Entry) => {
    // const { id, ...rest } = entry
    const { id, date, text, imageUrl } = entry
    await journalBaseApi.put(`/entries/${id}.json`, { date, text, imageUrl }) // response will be { date: '', text: ''}

    context.commit('updateEntry', { ...entry })
}

export const postEntry = async (context: any, entry: Entry) => {
    const { date, text, imageUrl } = entry
    // response will be { name: 'MxYu122-qoiOU' }
    const { data } = await journalBaseApi.post<any, AxiosResponse<NewEntryResponse>>('/entries.json', { date, text, imageUrl }) 
    entry.id = data.name

    context.commit('addEntry', entry)

    return entry.id
}

export const deleteEntry = async (context: any, idEntry: string) => {
    await journalBaseApi.delete(`/entries/${idEntry}.json`)

    context.commit('removeEntry', idEntry)
}