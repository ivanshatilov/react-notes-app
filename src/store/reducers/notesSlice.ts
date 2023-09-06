import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface NotesState {
    notes: {
        id: string,
        body: string,
    }[]
}

const initialState: NotesState = {
    // notes: ['take out the trash and clean up the house', 'go to a meeting in the park at 17 pm', 'finish reading the book',]
    notes: [
        {id: '1', body: 'take out the trash and clean up the house'},
        {id: '2', body: 'go to a meeting in the park at 17 pm'},
        {id: '3', body: 'finish reading the book'},
    
    ]
}

export const notesSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        addNote(state, action: PayloadAction<{id: string, body: string}>) {
            state.notes.push(action.payload);
        },
        removeNote(state, action: PayloadAction<string>) {
            state.notes = state.notes.filter(note => note.id !== action.payload )
        },
        updateNote(state, action: PayloadAction<{id: string, body: string}>) {
            state.notes = state.notes.map(note => {
                if(note.id === action.payload.id) {
                    note.body = action.payload.body
                }
                return note;
            })
        }
    }
})

export default notesSlice.reducer