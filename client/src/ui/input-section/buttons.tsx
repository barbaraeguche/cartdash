import { Pencil, Trash2 } from 'lucide-react';
import { deleteGrocery } from '../../api/crud.ts';

const EditButton = ({ item, onEdit }: {
	item: string,
	onEdit: (value: string) => void
}) => {
	return (
		<button onClick={() => onEdit(item)}
		        className="rounded-md p-2 text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
		>
			<span className="sr-only">Edit</span>
			<Pencil className="h-4 w-4"/>
		</button>
	);
};

const DeleteButton = ({ item }: {
	item: string
}) => {
	return (
		<button onClick={() => deleteGrocery(item)}
		        className="rounded-md p-2 text-red-700 hover:bg-red-100 transition-colors cursor-pointer"
		>
			<span className="sr-only">Delete</span>
			<Trash2 className="h-4 w-4"/>
		</button>
	);
};

export { EditButton, DeleteButton };