import {ChangeEvent} from 'react'
import clsx from "clsx";

interface ButtonProps { 
    type?: 'button' | 'submit' | undefined,
    fullWidth?: boolean,
    children?:  React.ReactNode | React.ReactElement,
    onClick?: (event: any) => void,
    danger?: boolean,
    secondary?: boolean,
    disabled?: boolean, 
}

const Button: React.FC<ButtonProps> = ({
    type,
    fullWidth,
    children,
    onClick,
    danger,
    secondary,
    disabled
}) => {
    return (
        <div className='shrink-0'>
            <button type={type} onClick={onClick} disabled={disabled} className={clsx(`
            flex
            justify-center
            text-sm
            font-semibold
            px-3
            py-2
            rounded-md
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-offset-2
            `,
            fullWidth && "w-full",
            disabled && "opacity-50 cursor-default",
            danger && "text-white bg-rose-500 focus-visible:outline-rose-600",
            danger && !disabled && "text-white bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
            secondary && "text-gray-900 bg-lime-400 focus-visible:outline-lime-400",
            secondary && !disabled && "text-gray-900 bg-lime-400 hover:bg-lime-500 focus-visible:outline-lime-400",
            !secondary && !danger && "bg-sky-500 focus-visible:outline-sky-600 text-white",
            !secondary && !danger && !disabled && "bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600 text-white",
            )}>
                {children}
            </button>
        </div> 
     );
}
 
export default Button;