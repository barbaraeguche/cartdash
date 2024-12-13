import clsx from 'clsx';

import { Pencil, Trash2 } from 'lucide-react';
import { deleteGrocery } from '../../api/handlers.ts';

const EditButton = ({ item, onEdit, isPurchased }: {
	item: string,
	onEdit: (value: string) => void,
	isPurchased: boolean
}) => {
	return (
		<button disabled={isPurchased}
		        onClick={() => onEdit(item)}
		        className={clsx(
							'rounded-md p-2 text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer',
			        { 'text-gray-300 hover:bg-transparent cursor-default': isPurchased }
		        )}
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
	return (
		<button disabled={isPurchased}
		        onClick={() => deleteGrocery(item)}
		        className={clsx(
							'rounded-md p-2 text-red-700 hover:bg-red-100 transition-colors cursor-pointer',
			        { 'text-gray-300 hover:bg-transparent cursor-default': isPurchased }
		        )}
		>
			<span className="sr-only">Delete</span>
			<Trash2 className="h-4 w-4"/>
		</button>
	);
};

export { EditButton, DeleteButton };