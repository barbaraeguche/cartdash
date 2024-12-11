import { useState, useEffect } from 'react';
import clsx from 'clsx';

import { fetchGrocery } from '../api/crud.ts';
import { Grocery } from '../util/types.ts';
import { EditButton, DeleteButton } from './buttons.tsx';

import EditItem from './editItem.tsx';

export default function GroceryList() {
	const [groceries, setGroceries] = useState<Grocery[]>([]);
	const [isEditing, setIsEditing] = useState<string | null>(null);
	
	const toggleHasPurchased = (grocery: string, isChecked: boolean) => {
		setGroceries(prev => prev.map(items =>
			items.item === grocery? {...items, hasPurchased: isChecked } : items
		));
	};
	
	useEffect(() => {
		fetchGrocery(setGroceries).then();
	}, []);
	
	return (
		<section className="mx-auto max-w-[450px] md:max-w-[900px]">
			{groceries.length > 0 && (
				<h3 className="text-center mt-16  mb-8 text-2xl tracking-[5%] italic">grocery list</h3>
			)}
			
			<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
				{groceries && (
					groceries.map(grocery => (
						<div key={grocery.item}
						     className={clsx(
							     '',
							     { 'flex bg-beige items-center justify-between rounded-md border border-emerald-700 px-2 py-1.5': isEditing !== grocery.item }
						     )}
						>
							{isEditing === grocery.item ? (
								<EditItem item={grocery.item} onClose={setIsEditing} />
							) : (
								<>
									{/* checkbox + item */}
									<div>
										<input type="checkbox"
										       onChange={(e) => toggleHasPurchased(grocery.item, e.target.checked)}
										/>
										<span className={clsx(
											'ml-2 transition-colors',
											{'line-through opacity-40': grocery.hasPurchased}
										)}>
											{grocery.item}
										</span>
									</div>
									
									{/* adjustment functionalities */}
									<div className="space-x-1">
										<EditButton item={grocery.item} onEdit={setIsEditing}/>
										<DeleteButton item={grocery.item}/>
									</div>
								</>
							)}
						</div>
					))
				)}
			</div>
		</section>
	);
}