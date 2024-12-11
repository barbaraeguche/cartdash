import { useState } from 'react';
import { Save } from 'lucide-react';
import { updateGrocery } from '../api/crud.ts';

import Input from '../ui/input.tsx';

export default function EditItem({ item, onClose }: { item: string, onClose: (value: null) => void }) {
	const [value, setValue] = useState<string>(item);
	
	return (
		<div className="flex bg-beige items-center justify-between rounded-md border border-emerald-700">
			<Input value={value}
			       onChange={(e) => setValue(e.target.value)}
			       className="w-[90%] focus-visible:outline-0"
			/>
			
			<button onClick={() => {
				updateGrocery(item, value).then();
				onClose(null);
			}}
			        className="rounded-md p-1.5 mx-auto hover:bg-gray-200 hover:text-gray-600 transition-colors"
			>
				<span className="sr-only">Update</span>
				<Save className="h-4 w-4"/>
			</button>
		</div>
	);
}