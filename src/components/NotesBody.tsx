import { useAppSelector } from "../hooks/redux";
import Note from "./Note";

interface NotesBodyProps {
    children?:  React.ReactNode | React.ReactElement
}

const NotesBody: React.FC<NotesBodyProps> = ({children}) => {
    const {notes} = useAppSelector(state => state.notesReducer);
    return (
        <div className="bg-white rounded-lg sm:mb-4 w-full h-full sm:w-3/4 lg:w-2/3 sm:mx-10 overflow-y-auto">
            {notes.map(item => <Note id={item.id} value={item.body} date={item.date} confirmed={item.confirmed} editable={item.editable}/> )}
        </div>
    )
}

export default NotesBody;