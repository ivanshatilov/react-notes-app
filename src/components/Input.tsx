import {ChangeEvent} from 'react'
import clsx from "clsx";

interface InputProps {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    value: string
    placeholder?: string,
    type?: string,
    required?: boolean,
    disabled?: boolean,
}

const Input: React.FC<InputProps> = ({
    onChange,
    value,
    placeholder,
    type,
    required,
    disabled
}) => {
    return ( 
        <div className="grow shrink">
                <input type={type} value={value} onChange={onChange} required={required} placeholder={placeholder} disabled={disabled}
                className={clsx(`
                form-input
                block
                w-full
                rounded-md
                border-0
                py-1.5
                px-2
                text-gray-900
                shadow-sm
                ring-1
                ring-inset
                ring-gray-300
                placeholder:text-gray-300
                placeholder:font-semibold
                focus:ring-1
                focus:ring-inset
                focus:ring-sky-500
                focus:outline-none
                selection:bg-sky-500
                selection:text-white
                `,
                disabled && "opacity-50 cursor-default")}/>
            </div>
     );
}
 
export default Input;