import {ChangeEvent} from 'react'
import { useAppDispatch } from "../hooks/redux";
import {notesSlice} from "../store/reducers/notesSlice";
import ItemButton from "./ItemButton";
import {BsFillPencilFill, BsFillTrashFill} from 'react-icons/bs'

interface NoteProps {
    id: string,
    value: string
}

const Note: React.FC<NoteProps> = ({value, id}) => {
    const {removeNote} = notesSlice.actions;
    const {updateNote} = notesSlice.actions;
    const dispatch = useAppDispatch();

    const deleteNoteHandler = (event: any) => {
        dispatch(removeNote(id))
    }
    const updateNoteHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNote({id: id, body: event.target.value}))
    }

    return (
        <div className="bg-white border-2 rounded-md border-gray-300 pl-5 m-2 h-20 overflow-clip flex gap-2">
            <textarea name="textarea" value={value} onChange={updateNoteHandler} className="grow block text-md text-gray-700 tracking-tight font-semibold truncate resize-none whitespace-pre-line outline-none h-full mt-3 disabled:bg-white" maxLength={128}/>
                <div className="flex gap-3 h-full bg-gray-100 items-center px-4">
                    <ItemButton icon={BsFillPencilFill} color='edit'/>
                    <ItemButton icon={BsFillTrashFill} onClick={deleteNoteHandler} color='delete'/>
                </div>
        </div>
    )
}

export default Note;