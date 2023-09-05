interface NoteProps {
    children?:  React.ReactNode | React.ReactElement
}

const Note: React.FC<NoteProps> = ({children}) => {
    return (
        <div className="bg-white border-2 rounded-md border-gray-200 px-5 py-4 m-2 h-auto overflow-clip flex gap-2">
            <p className="grow">{children}</p>
            <button>EDIT</button>
            <button>DELETE</button>
        </div>
    )
}

export default Note;