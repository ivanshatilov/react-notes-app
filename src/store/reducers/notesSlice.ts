import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface NotesState {
    notes: string[]
}

const initialState: NotesState = {
    notes: ['take out the trash and clean up the house', 'go to a meeting in the park at 17 pm', 'finish reading the book',]
}

export const notesSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        addNote(state, action: PayloadAction<string>) {
            state.notes.push(action.payload);
        },
        removeNote(state, action: PayloadAction<null>) {
            // state.notes.filter
        }
    }
})

export default notesSlice.reducer