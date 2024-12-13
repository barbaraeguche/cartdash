import React, { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

import { Grocery } from '../util/types.ts';
import { EditButton, DeleteButton } from '../ui/input-section/buttons.tsx';

export default function GroceryCard({ grocery, setIsEditing }: {
	grocery: Grocery,
	setIsEditing: (value: string) => void
}) {
	const [isPurchased, setIsPurchased] = useState<boolean>(false);
	
	const toggleHasPurchased = (e: React.ChangeEvent<HTMLInputElement>) => {
		setIsPurchased(e.target.checked);
	};
	
	return (
		<motion.div initial={{ opacity: 0, scale: 0.7 }}
		            animate={{ opacity: 1, scale: 1 }}
		            exit={{ opacity: 0, scale: 0.7 }}
		            transition={{ duration: 0.3 }}
		            className="flex items-center justify-between rounded-md border-t border-b px-2 py-1"
		>
			{/* checkbox + item */}
			<div>
				<input type="checkbox"
				       checked={isPurchased}
				       onChange={toggleHasPurchased}
				       className="accent-beige"
				/>
				<span className={clsx(
					'ml-2 transition-colors',
					{ 'line-through opacity-40': isPurchased }
				)}
				>
					{grocery.item}
				</span>
			</div>
			
			{/* functionalities */}
			<div>
				<EditButton item={grocery.item} onEdit={setIsEditing} isPurchased={isPurchased} />
				<DeleteButton item={grocery.item} isPurchased={isPurchased} />
			</div>
		</motion.div>
	);
}