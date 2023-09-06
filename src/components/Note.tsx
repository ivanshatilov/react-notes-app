import {ChangeEvent} from 'react'
import { useAppDispatch } from "../hooks/redux";
import {notesSlice} from "../store/reducers/notesSlice";
import ItemButton from "./ItemButton";
import {BsFillPencilFill, BsFillTrashFill, BsXLg, BsCheckLg} from 'react-icons/bs'

interface NoteProps {
    id: string,
    value: string,
    date: string,
    confirmed: boolean,
}

const Note: React.FC<NoteProps> = ({value, id, date, confirmed}) => {
    const {removeNote, updateNote, toggleConfirmed} = notesSlice.actions;
    const dispatch = useAppDispatch();

    const deleteNoteHandler = () => {
        dispatch(removeNote(id))
    }
    const updateNoteHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNote({id: id, body: event.target.value, date: new Date().toLocaleDateString()}))
    }
    const toggleConfirmedHandler = () => {
        dispatch(toggleConfirmed({id: id, confirmed: !confirmed}))
    }

    return (
        <div className={`bg-white border-2 rounded-md border-gray-300 pl-5 m-2 h-24 overflow-clip flex gap-10 ${confirmed && "bg-green-200 border-green-300"}`}>
            <textarea name="textarea" value={value} onChange={updateNoteHandler} className={`bg-transparent grow block text-md text-gray-700 tracking-tight font-semibold truncate resize-none whitespace-pre-line outline-none h-full mt-3 disabled:bg-transparent ${confirmed && "text-green-800"}`} maxLength={128}/>
                <div className="flex flex-col h-full bg-gray-100 items-center px-4 py-2">
                    <div className='flex gap-3 h-full bg-gray-100 items-center px-4'>
                        {confirmed ? <ItemButton icon={BsXLg} onClick={toggleConfirmedHandler} color='cancel'/> : <ItemButton icon={BsCheckLg} onClick={toggleConfirmedHandler} color='confirm'/>}
                        <ItemButton icon={BsFillPencilFill} color='edit'/>
                        <ItemButton icon={BsFillTrashFill} onClick={deleteNoteHandler} color='delete'/>
                    </div>
                    <span className='text-sm font-bold text-gray-400'>{date}</span>
                </div>
        </div>
    )
}

export default Note;