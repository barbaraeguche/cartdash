import clsx from 'clsx';

import { Grocery } from '../util/types.ts';
import { EditButton, DeleteButton } from '../ui/input-section/buttons.tsx';

export default function GroceryCard({ grocery, toggleHasPurchased, setIsEditing }: {
	grocery: Grocery,
	toggleHasPurchased: (grocery: string, isChecked: boolean) => void,
	setIsEditing: (value: string) => void
}) {
	return (
		<div className="flex items-center justify-between rounded-md border-t border-b px-2 py-1">
			{/* checkbox + item */}
			<div>
				<input type="checkbox"
				       onChange={(e) => toggleHasPurchased(grocery.item, e.target.checked)}
				/>
				<span className={clsx(
					'ml-2 transition-colors text-[15px]',
					{
						'line-through opacity-40': grocery.hasPurchased
					}
				)}
				>
					{grocery.item}
				</span>
			</div>
			
			{/* functionalities */}
			<div>
				<EditButton item={grocery.item} onEdit={setIsEditing} />
				<DeleteButton item={grocery.item} />
			</div>
		</div>
	);
}