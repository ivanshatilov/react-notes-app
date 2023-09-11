import {ChangeEvent} from 'react'
import { useAppDispatch } from "../hooks/redux";
import {notesSlice} from "../store/reducers/notesSlice";
import ItemButton from "./ItemButton";
import {BsFillPencilFill, BsFillTrashFill, BsXLg, BsCheckLg} from 'react-icons/bs'
import {BiGridVertical} from 'react-icons/bi'
import { Draggable } from 'react-beautiful-dnd';

interface NoteProps {
    id: string,
    value: string,
    date: string,
    confirmed: boolean,
    editable: boolean,
    propIndex: number
}

const Note: React.FC<NoteProps> = ({value, id, date, confirmed, editable, propIndex}) => {
    const {removeNote, updateNote, toggleConfirmed, toggleEditable} = notesSlice.actions;
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
    const toggleEditableHandler = () => {
        dispatch(toggleEditable({id: id, editable: !editable}))
    }

    return (
        <Draggable key={id} draggableId={id} index={propIndex}>
            {(provided) => (
                    <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                            <div className={`flex rounded-lg m-1 bg-gray-50 border-2 border-gray-300 ${confirmed && "bg-green-50 border-green-300"} ${editable && "bg-yellow-50 border-yellow-200"}`}>
                            <div className={`flex items-center justify-center text-2xl text-gray-500 px-4 ${confirmed && "text-green-600"} ${editable && "text-yellow-600"}`}>
                                <BiGridVertical />
                            </div>
                            <div className={`grow border rounded-md border-gray-300 pl-5 m-2 h-48 lg:h-24 overflow-clip flex gap-0 ${confirmed && "bg-green-100 border-green-300"} ${editable && "bg-yellow-100 border-yellow-200"}`}>
                            <textarea id='note' name="textarea" disabled={!editable} value={value} onChange={updateNoteHandler} className={`bg-transparent grow block text-md text-gray-700 pr-10 tracking-tight font-semibold resize-none overflow-auto whitespace-pre-line outline-none h-full mt-3 disabled:bg-transparent ${confirmed && "text-green-700"} ${editable && "text-yellow-800"}`} maxLength={128}/>
                                
                            </div>
                            <div className={`flex flex-col rounded-r-lg bg-gray-100 justify-center items-center px-4 py-2 ${confirmed && "bg-green-200"} ${editable && "bg-yellow-200"}`}>
                                    <div className='flex flex-col mt-2 mb-3 lg:mt-0 lg:flex-row gap-3 bg-transparent items-center px-4'>
                                        {confirmed ? <ItemButton icon={BsXLg} onClick={toggleConfirmedHandler} disabled={editable} color='cancel'/> : <ItemButton icon={BsCheckLg} onClick={toggleConfirmedHandler} disabled={editable} color='confirm'/>}
                                        {editable ? <ItemButton icon={BsFillPencilFill} disabled={confirmed} onClick={toggleEditableHandler} color='edit'/> : <ItemButton icon={BsFillPencilFill} disabled={confirmed} onClick={toggleEditableHandler} color='edit'/>}
                                        <ItemButton icon={BsFillTrashFill} onClick={deleteNoteHandler} disabled={editable} color='delete'/>
                                    </div>
                                    <span className='text-sm font-bold text-gray-400'>{date}</span> 
                            </div>
                        </div> 
                    </li>
            )}
        </Draggable>
    )
}

export default Note;