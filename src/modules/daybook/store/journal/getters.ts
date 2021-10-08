import { Entry } from '../../interfaces/entry.interface';


// Getters are a fast way to read state and return information as I need it.

export const getEntriesBySearchTerm = (state: any) => (searchTerm: string): Entry[] => {
    if (searchTerm.trim().length === 0) return state.entries

    return state.entries.filter((entry: any) => entry.text.toLowerCase().includes(searchTerm.trim().toLocaleLowerCase()))
}

export const getEntryById = (state: any) => (id: string) => {
    const entry = state.entries.find((entry: any) => entry.id === id) // 'find' method return an object

    if (!entry) return

    return { ...entry }

    // This is correct, but JS objects pass by reference (remember that)
    // return state.entries.find((entry: any) => entry.id === id)
    // Test sending only 'entry' without spread operator (see video 168)
}