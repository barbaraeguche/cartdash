import { useState } from 'react';
import { Save } from 'lucide-react';

import { updateGrocery } from '../api/crud.ts';
import Input from '../ui/input.tsx';

export default function EditGrocery({ item, onSave }: {
	item: string,
	onSave: (value: null) => void
}) {
	const [value, setValue] = useState<string>(item);
	
	return (
		<div className="flex items-center space-x-1.5 px-2 rounded-md border-t border-b">
			<Input value={value}
			       onChange={(e) => setValue(e.target.value)}
			       className="rounded-md w-[89.75%] border-0 border-r border-gray-200 focus-visible:outline-0 focus-visible:outline-transparent"
			/>
			
			<button className="rounded-md p-2 mx-auto text-green-700 hover:bg-green-100 transition-colors cursor-pointer"
			        onClick={() => {
								updateGrocery(item, value).then();
								onSave(null);
							}}
			>
				<span className="sr-only">Update</span>
				<Save className="h-4 w-4"/>
			</button>
		</div>
	);
}