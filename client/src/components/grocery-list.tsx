import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import { fetchGrocery } from '../api/handlers.ts';
import { Grocery } from '../util/types.ts';

import EditGrocery from './edit-grocery.tsx';
import GroceryCard from './grocery-card.tsx';

export default function GroceryList() {
	const [groceries, setGroceries] = useState<Grocery[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isEditing, setIsEditing] = useState<string | null>(null);

	setIsLoading(true); // start loading
	useEffect(() => {
		const loadGroceries = async () => {
			await fetchGrocery(setGroceries);
		};
		
		loadGroceries();
	}, [groceries]);
	setIsLoading(false); // stop loading once fetched
	
	// useEffect(() => {
	// 	const loadGroceries = async () => {
	// 		setIsLoading(true); // start loading
	// 		try {
	// 			await fetchGrocery(setGroceries);
	// 		} finally { setIsLoading(false); } // stop loading once fetched
	// 	};
		
	// 	loadGroceries();
	// }, []);
	// useEffect(() => {
	// 	fetchGrocery(setGroceries);
	// }, [groceries]);
	
	return (
		<section className="mt-10 sm:mt-16 text-center mx-auto max-w-[450px] md:max-w-[900px]">
			{/* show loader while fetching */}
			{isLoading ? (
				<p className="text-[17px] tracking-[3px] animate-pulse">loading items...</p>
			) : (
				groceries.length === 0? (
					<span>There are currently no items in your list.</span>
				) : (
					<>
						{/* show content once fetched */}
						<h3 className="font-luckiest-guy text-2xl tracking-[7%] text-mint-100">
							~~ grocery list ~~
						</h3>
						
						<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-y-1 gap-x-3 mb-14 sm:mb-20">
							<AnimatePresence>
								{groceries.map((grocery) => (
									<div key={grocery.item}>
										{isEditing === grocery.item ? (
											<EditGrocery item={grocery.item} onSave={setIsEditing}/>
										) : (
											<GroceryCard grocery={grocery} setIsEditing={setIsEditing}/>
										)}
									</div>
								))}
							</AnimatePresence>
						</div>
					</>
				)
			)}
		</section>
	);
}
