import { useAppSelector } from "../hooks/redux";
import Note from "./Note";

interface NotesBodyProps {
    children?:  React.ReactNode | React.ReactElement
}

const NotesBody: React.FC<NotesBodyProps> = ({children}) => {
    const {notes} = useAppSelector(state => state.notesReducer);
    return (
        <div id="notesbody" className="bg-white rounded-lg sm:mb-4 w-full h-full sm:w-3/4 lg:w-2/3 sm:mx-10 overflow-y-auto">
            {notes.length > 0 ? notes.map(item => <Note id={item.id} value={item.body} date={item.date} confirmed={item.confirmed} editable={item.editable}/> ) :
            <div className="h-full w-full flex items-center justify-center">
                <div className="flex flex-col items-center gap-6">
                    <div className="ml-6 w-52 h-full select-none">
                        <img className="select-none" src="/notes.png"/>
                    </div>
                    <div className="font-bold text-3xl select-none">No notes found</div>
                </div>
            </div>
            }
            
        </div>
    )
}

export default NotesBody;