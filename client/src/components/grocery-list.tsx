import { useState, useEffect } from 'react';

import { fetchGrocery } from '../api/crud.ts';
import { Grocery } from '../util/types.ts';

import EditGrocery from './edit-grocery.tsx';
import GroceryCard from './grocery-card.tsx';

export default function GroceryList() {
	const [groceries, setGroceries] = useState<Grocery[]>([]);
	const [isEditing, setIsEditing] = useState<string | null>(null);
	
	const toggleHasPurchased = (grocery: string, isChecked: boolean) => {
		setGroceries((prev) =>
			prev.map((items) =>
				items.item === grocery
					? ({...items, hasPurchased: isChecked }) // update the hasPurchased property
					: items // leave other items unchanged
		));
	};
	
	useEffect(() => {
		fetchGrocery(setGroceries).then();
	}, []);
	// useEffect(() => {
	// 	fetchGrocery(setGroceries).then();
	// }, [groceries]);
	
	return (
		<section className="mx-auto max-w-[450px] md:max-w-[900px]">
			{groceries.length > 0 && (
				<h3 className="text-center mt-16 mb-8 text-2xl tracking-[5%] italic">~ grocery list ~</h3>
			)}
			
			<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
				{groceries && (
					groceries.map(grocery => (
						<div key={grocery.item}>
							{
								isEditing === grocery.item ? (
									<EditGrocery item={grocery.item} onSave={setIsEditing} />
								) : (
									<GroceryCard grocery={grocery} toggleHasPurchased={toggleHasPurchased} setIsEditing={setIsEditing} />
								)
							}
						</div>
					))
				)}
			</div>
		</section>
	);
}