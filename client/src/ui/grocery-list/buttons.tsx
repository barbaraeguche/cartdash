import { Pencil, Trash2 } from 'lucide-react';
import { deleteGrocery } from '../../api/handlers.ts';
import { useGroceryContext } from '../../hooks/groceryContext.tsx';

const EditButton = ({ item, onEdit, isPurchased }: {
	item: string,
	onEdit: (value: string) => void,
	isPurchased: boolean
}) => {
	return (
		<button disabled={isPurchased}
		        onClick={() => onEdit(item)}
		        className="rounded-md p-2 text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer disabled:text-gray-300 disabled:hover:bg-transparent disabled:cursor-default"
		>
			<span className="sr-only">Edit</span>
			<Pencil className="h-4 w-4"/>
		</button>
	);
};

const DeleteButton = ({ item, isPurchased }: {
	item: string,
	isPurchased: boolean
}) => {
	const { triggerReload } = useGroceryContext();
	
	return (
		<button disabled={isPurchased}
		        onClick={() => {
							const removeGrocery = async () => {
								await deleteGrocery(item);
							}
			    
							removeGrocery();
			        triggerReload(); // trigger re-fetching of groceries
		        }}
		        className="rounded-md p-2 text-red-700 hover:bg-red-100 transition-colors cursor-pointer disabled:text-gray-300 disabled:hover:bg-transparent disabled:cursor-default"
		>
			<span className="sr-only">Delete</span>
			<Trash2 className="h-4 w-4"/>
		</button>
	);
};

export { EditButton, DeleteButton };