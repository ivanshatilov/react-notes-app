import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { nanoid } from "nanoid"

interface NotesState {
    notes: {
        id: string,
        body: string,
        date: {day: string, time: string},
        confirmed: boolean,
        editable: boolean
    }[]
}

// @ts-ignore
const localNotes = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : []

const initialState: NotesState = {
    // notes: ['take out the trash and clean up the house', 'go to a meeting in the park at 17 pm', 'finish reading the book',]
    notes: localNotes
}
// [
//     {id: nanoid(), body: 'take out the trash and clean up the house', date: {day: "Tue Sep 12 2023", time: "12:30:24"}, confirmed: false, editable: false},
//     {id: nanoid(), body: 'go to a meeting in the park at 17 pm', date: {day: "Tue Sep 12 2023", time: "12:30:24"}, confirmed: false, editable: false},
//     {id: nanoid(), body: 'finish reading the book', date: {day: "Tue Sep 12 2023", time: "12:30:24"}, confirmed: false, editable: false},
// ]

export const notesSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        addNote(state, action: PayloadAction<{id: string, body: string, date: {day: string, time: string}, confirmed: boolean, editable: boolean}>) {
            state.notes.unshift(action.payload);
            localStorage.setItem('notes', JSON.stringify(state.notes.map(item => item)));
        },
        removeNote(state, action: PayloadAction<string>) {
            state.notes = state.notes.filter(note => note.id !== action.payload )
            localStorage.setItem('notes', JSON.stringify(state.notes.map(item => item)))
        },
        updateNote(state, action: PayloadAction<{id: string, body: string, date: {day: string, time: string}}>) {
            state.notes = state.notes.map(note => {
                if(note.id === action.payload.id) {
                    note.body = action.payload.body
                    note.date = action.payload.date
                }
                localStorage.setItem('notes', JSON.stringify(state.notes.map(item => item)))
                return note;
            })
        },
        toggleConfirmed(state, action: PayloadAction<{id: string, confirmed: boolean}>) {
            state.notes = state.notes.map(note => {
                if(note.id === action.payload.id) {
                    note.confirmed = action.payload.confirmed
                }
                localStorage.setItem('notes', JSON.stringify(state.notes.map(item => item)))
                return note;
            })
        },
        toggleEditable(state, action: PayloadAction<{id: string, editable: boolean}>) {
            state.notes = state.notes.map(note => {
                if(note.id === action.payload.id) {
                    note.editable = action.payload.editable
                    note.body = note.body.trim()
                }
                localStorage.setItem('notes', JSON.stringify(state.notes.map(item => item)))
                return note;
            })
        },
        moveNote(state, action: PayloadAction<{oldNoteIndex: number, destNoteIndex: number}>) {
            const newCards = Array.from(state.notes);
            const [removedCard] = newCards.splice(action.payload.oldNoteIndex, 1);
            newCards.splice(action.payload.destNoteIndex, 0, removedCard);
            state.notes = newCards;
            localStorage.setItem('notes', JSON.stringify(state.notes.map(item => item)))
        }
    }
})

export default notesSlice.reducer