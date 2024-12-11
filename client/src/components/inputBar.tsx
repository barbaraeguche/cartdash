import { useState } from 'react';
import { Plus } from 'lucide-react';
import { addGrocery } from '../api/crud.ts';

import Input from '../ui/input.tsx';
import Button from '../ui/button.tsx';

export default function InputBar() {
	const [newItem, setNewItem] = useState<string>('');
	
	return (
		<section className="mt-12 flex gap-2 mx-auto max-w-[450px] md:max-w-[600px]">
			{/* input field */}
			<div className="flex flex-1 flex-shrink-0">
				<label htmlFor="grocery" className="sr-only">
					Enter item
				</label>
				<Input value={newItem}
				       onChange={(e) => setNewItem(e.target.value)}
				       placeholder="Enter an item"
				/>
			</div>
			
			{/* add button */}
			<Button onClick={() => addGrocery(newItem, setNewItem)}>
				<span className="hidden sm:block">
					Add Item
				</span>
				<Plus className="w-5 sm:hidden"/>
			</Button>
		</section>
	);
}