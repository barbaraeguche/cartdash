import { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

import { toast } from 'react-hot-toast';
import { Save, Ban } from 'lucide-react';

import { duplicateMsg, toastConfig } from '../util/constants.ts';
import { updateGrocery } from '../api/crud.ts';
import Input from '../ui/input.tsx';

export default function EditGrocery({ item, onSave }: {
	item: string,
	onSave: (value: null) => void
}) {
	const [value, setValue] = useState<string>(item);
	
	return (
		<motion.div initial={{ opacity: 0, scale: 0.7 }}
		            animate={{ opacity: 1, scale: 1 }}
		            exit={{ opacity: 0, scale: 0.7 }}
		            transition={{ duration: 0.3 }}
		            className="flex items-center space-x-1.5 px-2 rounded-md border-t border-b"
		>
			<Input value={value}
			       onChange={(e) => setValue(e.target.value)}
			       className="rounded-md border-0 border-r border-gray-200 focus-visible:outline-0 focus-visible:outline-transparent"
			/>
			
			<div className="flex small:w-[17%]">
				{/* save button */}
				<button disabled={!value}
				        className={clsx(
					        'rounded-md p-2 text-green-700 hover:bg-green-100 transition-colors cursor-pointer',
					        {'text-gray-300 hover:bg-transparent cursor-default': !value}
				        )}
				        onClick={async () => {
					        const message = await updateGrocery(item, value);
					        
					        if (message === duplicateMsg) {
						        toast('No changes made.', toastConfig);
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
		</motion.div>
	);
}