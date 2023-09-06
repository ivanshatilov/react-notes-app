import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface NotesState {
    notes: {
        id: string,
        body: string,
        date: string,
        confirmed: boolean,
        editable: boolean
    }[]
}

const initialState: NotesState = {
    // notes: ['take out the trash and clean up the house', 'go to a meeting in the park at 17 pm', 'finish reading the book',]
    notes: [
        {id: '1', body: 'take out the trash and clean up the house', date: "17:20:2001", confirmed: false, editable: false},
        {id: '2', body: 'go to a meeting in the park at 17 pm', date: "17:20:2001", confirmed: false, editable: false},
        {id: '3', body: 'finish reading the book', date: "17:20:2001", confirmed: false, editable: false},
    
    ]
}

export const notesSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        addNote(state, action: PayloadAction<{id: string, body: string, date: string, confirmed: boolean, editable: boolean}>) {
            state.notes.push(action.payload);
        },
        removeNote(state, action: PayloadAction<string>) {
            state.notes = state.notes.filter(note => note.id !== action.payload )
        },
        updateNote(state, action: PayloadAction<{id: string, body: string, date: string}>) {
            state.notes = state.notes.map(note => {
                if(note.id === action.payload.id) {
                    note.body = action.payload.body
                    note.date = action.payload.date
                }
                return note;
            })
        },
        toggleConfirmed(state, action: PayloadAction<{id: string, confirmed: boolean}>) {
            state.notes = state.notes.map(note => {
                if(note.id === action.payload.id) {
                    note.confirmed = action.payload.confirmed
                }
                return note;
            })
        },
        toggleEditable(state, action: PayloadAction<{id: string, editable: boolean}>) {
            state.notes = state.notes.map(note => {
                if(note.id === action.payload.id) {
                    note.editable = action.payload.editable
                    note.body = note.body.trim()
                }
                return note;
            })
        }
    }
})

export default notesSlice.reducer