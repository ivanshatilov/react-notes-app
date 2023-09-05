import { useState, ChangeEvent } from "react";
import Button from "./Button";
import Input from "./Input";

interface AddNoteInputProps {

}

const AddNoteForm: React.FC<AddNoteInputProps> = () => {
    const addNoteHandler = (event: any) => {
        event.preventDefault();
        alert(value);
        setValue("")
    }
    const [value, setValue] = useState("");

    const updateValue = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    return (
        <div className="w-full lg:w-2/3 sm:mx-10">
            <form onSubmit={addNoteHandler} className="sm:my-8 p-5 flex gap-4 sm:gap-8 bg-slate-300 rounded-lg">
                <Input placeholder="Some text" value={value} required onChange={updateValue} />
                <Button type='submit'>Add note</Button>
            </form>
        </div>
     );
}
 
export default AddNoteForm;