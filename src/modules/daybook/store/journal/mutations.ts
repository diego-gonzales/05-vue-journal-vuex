import { Entry } from '../../interfaces/entry.interface';

// Mutations mutate the state


export const setEntries = (state: any, entries: Entry[]) => {
    state.entries = [...state.entries, ...entries]
    state.isLoading = false
}

export const updateEntry = (state: any, updatedEntry: Entry) => {
    const idx = state.entries.map( (e: Entry) => e.id ).indexOf(updatedEntry.id)
    state.entries[idx] = updatedEntry
}

export const addEntry = (state: any, createdEntry: Entry) => {
    state.entries = [ createdEntry, ...state.entries ]
}

export const removeEntry = (state:any, idEntry: string) => {
    state.entries = state.entries.filter((entry: Entry) => entry.id !== idEntry)
}