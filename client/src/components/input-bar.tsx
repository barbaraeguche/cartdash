import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Plus } from 'lucide-react';

import { duplicateMsg, toastConfig } from '../util/constants.ts';
import { addGrocery } from '../api/crud.ts';

import Input from '../ui/input.tsx';
import Button from '../ui/button.tsx';

export default function InputBar() {
	const [newItem, setNewItem] = useState<string>('');
	
	return (
		<section className="mt-14 sm:mt-20 flex gap-1.5 mx-auto max-w-[450px] md:max-w-[600px]">
			{/* input field */}
			<div className="flex flex-1 flex-shrink-0">
				<label htmlFor="grocery-input" className="sr-only">
					Enter item
				</label>
				<Input value={newItem}
				       onChange={(e) => setNewItem(e.target.value)}
				       placeholder="Enter an item"
				/>
			</div>
			
			{/* add button */}
			<Button disabled={!newItem}
			        className="disabled:bg-gray-100 disabled:cursor-default"
			        onClick={async () => {
				        const message = await addGrocery(newItem, setNewItem);
								
								if (message === duplicateMsg) {
									toast('Error: Duplicate item.', toastConfig);
									setNewItem(newItem); // keep existing item
									return;
								}
			        }}
			>
				<span className="hidden sm:block">
					Add Item
				</span>
				<Plus className="w-5 sm:hidden" />
			</Button>
		</section>
	);
}