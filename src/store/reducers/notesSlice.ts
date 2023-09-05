import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface NotesState {
    notes: string[]
}

const initialState: NotesState = {
    notes: ['a', 'b', '1234567890abc',]
}

export const notesSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        addNote(state, action: PayloadAction<string>) {
            state.notes.push(action.payload);
        }
    }
})

export default notesSlice.reducer