import { useState, ChangeEvent } from "react";
import Button from "./Button";
import Input from "./Input";
import { notesSlice } from "../store/reducers/notesSlice";
import { useAppDispatch } from "../hooks/redux";
import { nanoid } from "nanoid";

interface AddNoteInputProps {

}

const AddNoteForm: React.FC<AddNoteInputProps> = () => {
    const {addNote} = notesSlice.actions;
    const dispatch = useAppDispatch()

    const addNoteHandler = (event: any) => {
        event.preventDefault();
        if(value.trim().length > 2) {
            dispatch(addNote({id: nanoid(), body: value.trim(),  date: new Date().toLocaleDateString(), confirmed: false, editable: false}))
            setValue("")
        }
        else alert("The note should contain more symbols!")
    }
    const [value, setValue] = useState("");

    const updateValue = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    return (
        <div className="w-full lg:w-2/3 lg:mx-10">
            <form onSubmit={addNoteHandler} className="lg:my-8 p-6 py-8 lg:py-6 flex gap-4 sm:gap-8 bg-white lg:rounded-lg">
                <Input placeholder="Some text" value={value} required onChange={updateValue} />
                <Button type='submit'>Add note</Button>
            </form>
        </div>
     );
}
 
export default AddNoteForm;