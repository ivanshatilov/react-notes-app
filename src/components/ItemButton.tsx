import clsx from "clsx";
import { IconType } from "react-icons";

interface ItemButtonProps {
    icon: IconType,
    color: 'delete' | 'edit' | 'confirm' | 'cancel',
    onClick?: (event: any) => void,
    disabled?: boolean
}

const ItemButton: React.FC<ItemButtonProps> = ({
    icon: Icon,
    onClick,
    color,
    disabled
}) => {
    return (
        <div className='shrink-0'>
            <button type="button" disabled={disabled} onClick={onClick} className={clsx(`
           inline-flex
           rounded-full
           p-2
           text-white
           shadow-sm
           text-md
            `,
            color === 'delete' && "bg-red-600 hover:bg-red-900 hover:text-gray-50",
            color === 'edit' && "bg-emerald-600 hover:bg-emerald-900 hover:text-gray-50",
            color === 'confirm' && "bg-lime-600 hover:bg-lime-900 hover:text-gray-50",
            color === 'cancel' && "bg-stone-400 hover:bg-stone-600 hover:text-gray-50",
            disabled && "bg-gray-300 hover:bg-gray-300"
            )}>
                <Icon />
            </button>
        </div> 
     );
}
 
export default ItemButton;