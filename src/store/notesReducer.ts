const ADD_NOTE = "ADD_NOTE";

interface NotesState {
    notes: string[]
}

type Action = {
    type: string,
    payload: string
}

const initialState = {
    notes: []
}


export const notesReducer = (state:NotesState = initialState, action:Action) => {
    switch(action.type) {
        case ADD_NOTE : {
            return {...state, notes: [...state.notes, action.payload]}
        }
        default : return state
    }
}