import { useState, useEffect } from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import clsx from 'clsx';
import { fetchGrocery, deleteGrocery } from '../api/crud.ts';
import { Grocery } from '../util/types.ts';

export default function GroceryList() {
	const [groceries, setGroceries] = useState<Grocery[]>([]);
	
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
						     className="flex px-2 py-1.5 bg-beige items-center justify-between rounded-md border border-emerald-700"
						>
							{/* checkbox + item */}
							<div>
								<input type="checkbox"
								       onChange={(e) => toggleHasPurchased(grocery.item, e.target.checked)}
								/>
								<span className={clsx(
									'ml-2 transition-colors',
									{ 'line-through opacity-40': grocery.hasPurchased }
								)}>
									{grocery.item}
								</span>
							</div>
							
							{/* adjustment functionalities */}
							<div className="space-x-1">
								<button onClick={() => deleteGrocery(grocery.item)}
								        className="rounded-md p-1.5 hover:bg-gray-200 hover:text-gray-600 transition-colors"
								>
									<span className="sr-only">Edit</span>
									<Pencil className="h-4 w-4"/>
								</button>
								
								<button onClick={() => deleteGrocery(grocery.item)}
								        className="rounded-md p-1.5 hover:bg-red-200 hover:text-red-600 transition-colors"
								>
									<span className="sr-only">Delete</span>
									<Trash2 className="h-4 w-4"/>
								</button>
							</div>
						</div>
					))
				)}
			</div>
		</section>
	);
}