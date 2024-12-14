import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import { fetchGrocery } from '../api/handlers.ts';
import { Grocery } from '../util/types.ts';
// import Spinner from '../ui/grocery-list/spinner.tsx';

import EditGrocery from './edit-grocery.tsx';
import GroceryCard from './grocery-card.tsx';

export default function GroceryList() {
	const [groceries, setGroceries] = useState<Grocery[]>([]);
	const [isEditing, setIsEditing] = useState<string | null>(null);
	
	useEffect(() => {
		fetchGrocery(setGroceries);
	}, [groceries]);
	
	return (
		<section className="mx-auto max-w-[450px] md:max-w-[900px]">
			{groceries.length > 0 && (
				<h3 className="font-luckiest-guy mt-10 sm:mt-16 mb-4 text-center text-[25px] tracking-[7%] text-mint-100">~~~ GROCERY LIST ~~~</h3>
			)}
			
			<div className="grid grid-cols-1 md:grid-cols-2 gap-y-1 gap-x-3 mb-14 sm:mb-20">
				<AnimatePresence>
					{groceries.map((grocery) => (
						<div key={grocery.item}>
							{isEditing === grocery.item ? (
								<EditGrocery item={grocery.item} onSave={setIsEditing} />
							) : (
								<GroceryCard grocery={grocery} setIsEditing={setIsEditing} />
							)}
						</div>
					))}
				</AnimatePresence>
			</div>
			
			{/*<Spinner />*/}
		</section>
	);
}