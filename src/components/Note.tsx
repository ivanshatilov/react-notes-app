import ItemButton from "./ItemButton";
import {BsFillPencilFill, BsFillTrashFill} from 'react-icons/bs'

interface NoteProps {
    children?:  React.ReactNode | React.ReactElement
}

const Note: React.FC<NoteProps> = ({children}) => {
    return (
        <div className="bg-white border-2 rounded-md border-gray-300 pl-5 m-2 h-auto overflow-clip flex gap-2">
            <p className="grow text-md text-gray-700 tracking-tight font-semibold py-4 mt-1 truncate">{children}</p>
            <div className="flex gap-3 h-full bg-gray-100 py-4 px-4">
                <ItemButton icon={BsFillPencilFill} color='edit'/>
                <ItemButton icon={BsFillTrashFill} color='delete'/>
            </div>
        </div>
    )
}

export default Note;