import { configureStore, combineReducers } from "@reduxjs/toolkit"
import notesReducer from "./reducers/notesSlice"


const rootReducer = combineReducers({ notesReducer })

export const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;