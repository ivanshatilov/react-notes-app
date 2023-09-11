import { useAppDispatch, useAppSelector } from "../hooks/redux";
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import Note from "./Note";
import {notesSlice} from "../store/reducers/notesSlice";

interface NotesBodyProps {
    children?:  React.ReactNode | React.ReactElement
}

const NotesBody: React.FC<NotesBodyProps> = ({children}) => {
    const {notes} = useAppSelector(state => state.notesReducer);
    const {moveNote} = notesSlice.actions;
    const dispatch = useAppDispatch();
    
    const handleDragEnd = (result: any) => {
        console.log(result)
        const {destination, source} = result
        if (!destination) return;

        if (source.index !== destination.index) {
            dispatch(moveNote({oldNoteIndex: source.index, destNoteIndex: destination.index}));
          }
        };


    return (
        <DragDropContext onDragEnd={handleDragEnd}>
        <div id="notesbody" className="bg-white lg:rounded-lg sm:mb-4 w-full h-full lg:w-2/3 sm:mx-10 overflow-y-auto">
                <Droppable droppableId="Notes">
                    {(provided) => (
                        <ul className="flex flex-col h-full" {...provided.droppableProps} ref={provided.innerRef}>
                            {notes.length > 0 ? notes.map(({id, body, date, confirmed, editable},index: number) => (
                                <Note id={id} value={body} date={date} confirmed={confirmed} editable={editable} propIndex={index}/>
                            )) : (
                                <div className="h-full w-full flex items-center justify-center">
                                <div className="flex flex-col items-center gap-6">
                                    <div className="ml-6 w-52 h-full select-none">
                                        <img className="select-none" src="/notes.png" alt="notes"/>
                                    </div>
                                    <div className="font-bold text-3xl select-none">No notes found</div>
                                </div>
                            </div>
                            ) 
                            }
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            
            
            
            
            
            
            
        </div>
        </DragDropContext> 
    )
}

export default NotesBody;