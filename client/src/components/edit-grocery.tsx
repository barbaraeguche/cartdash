import { useState } from 'react';
import clsx from 'clsx';
import { toast } from 'react-hot-toast';
import { Save, Ban } from 'lucide-react';

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
			       className="rounded-md w-[83.75%] border-0 border-r border-gray-200 focus-visible:outline-0 focus-visible:outline-transparent"
			/>
			
			{/*disabled={!newItem}*/}
			{/*className="disabled:bg-gray-100 disabled:cursor-not-allowed"*/}
			
			<div className="mx-auto">
				{/* save button */}
				<button disabled={!value}
				        className={clsx(
									'rounded-md p-2 text-green-700 hover:bg-green-100 transition-colors cursor-pointer',
					        { 'text-gray-300 hover:bg-transparent cursor-default': !value }
				        )}
				        onClick={async () => {
					        const message = await updateGrocery(item, value);
					        
					        if (message === 'Item already exists in your list.') {
						        toast(message);
						        return;
					        } else onSave(null);
				        }}
				>
					<span className="sr-only">Update</span>
					<Save className="h-4 w-4"/>
				</button>
				
				{/* cancel button */}
				<button className="rounded-md p-2 text-red-700 hover:bg-red-100 transition-colors cursor-pointer"
				        onClick={() => onSave(null)}
				>
					<span className="sr-only">Cancel</span>
					<Ban className="h-4 w-4"/>
				</button>
			</div>
		</div>
	);
}