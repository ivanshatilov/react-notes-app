import { useState, ChangeEvent } from "react";
import Button from "./Button";
import Input from "./Input";
import { notesSlice } from "../store/reducers/notesSlice";
import { useAppDispatch } from "../hooks/redux";

interface AddNoteInputProps {

}

const AddNoteForm: React.FC<AddNoteInputProps> = () => {
    const {addNote} = notesSlice.actions;
    const dispatch = useAppDispatch()

    const addNoteHandler = (event: any) => {
        event.preventDefault();
        dispatch(addNote(value))
        setValue("")
    }
    const [value, setValue] = useState("");

    const updateValue = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    return (
        <div className="w-full sm:w-3/4 lg:w-2/3 sm:mx-10">
            <form onSubmit={addNoteHandler} className="sm:my-8 p-5 flex gap-4 sm:gap-8 bg-white rounded-lg">
                <Input placeholder="Some text" value={value} required onChange={updateValue} />
                <Button type='submit'>Add note</Button>
            </form>
        </div>
     );
}
 
export default AddNoteForm;