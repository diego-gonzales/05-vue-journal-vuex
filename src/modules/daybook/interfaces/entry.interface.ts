export interface Entry {
    id?: string;
    text: string;
    date: string;
    imageUrl?: string | null
}


export interface NewEntryResponse {
    name: string
}