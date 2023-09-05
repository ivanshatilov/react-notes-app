import clsx from "clsx";
import { IconType } from "react-icons";

interface ItemButtonProps {
    icon: IconType,
    color: 'delete' | 'edit' | 'confirm',
    onClick?: (event: any) => void,
}

const ItemButton: React.FC<ItemButtonProps> = ({
    icon: Icon,
    onClick,
    color
}) => {
    return (
        <div className='shrink-0'>
            <button type="button" onClick={onClick} className={clsx(`
           inline-flex
           bg-blue-900
           rounded-full
           p-2
           text-white
           shadow-sm
           text-md
            `,
            color === 'delete' && "bg-red-600 hover:bg-red-900 hover:text-gray-50",
            color === 'edit' && "bg-green-600 hover:bg-green-900 hover:text-gray-50"
            )}>
                <Icon />
            </button>
        </div> 
     );
}
 
export default ItemButton;