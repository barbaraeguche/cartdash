import { useState } from 'react';
import axios from 'axios';
import { Plus } from 'lucide-react';
import { urlString } from '../util/constants.ts';

import Input from '../ui/input.tsx';
import Button from '../ui/button.tsx';

export default function InputBar() {
	const [newItem, setNewItem] = useState<string>('');
	
	const addGrocery = async () => {
		if (!newItem) return;  // if input is an empty string
		// add grocery to database
		try {
			await axios.post(`${urlString}/add`,
				{ 'latter': newItem },
				{ headers: { 'Content-Type': 'application/json' } }
			);
			setNewItem('');
		} catch (err) {
			console.error(`Error adding item: ${err}`);
		}
	}
	
	return (
		<section className="mt-12 flex gap-2 mx-auto max-w-[600px]">
			{/* input field */}
			<div className="flex flex-1 flex-shrink-0">
				<label htmlFor="grocery" className="sr-only">
					Add new item
				</label>
				<Input value={newItem}
				       onChange={(e) => setNewItem(e.target.value)}
				       placeholder="Enter an item"
				/>
			</div>
			
			{/* add button */}
			<Button onClick={addGrocery}>
				<span className="hidden sm:block">
					Add Item
				</span>
				<Plus className="h-5 w-5 sm:hidden"/>
			</Button>
		</section>
	);
}