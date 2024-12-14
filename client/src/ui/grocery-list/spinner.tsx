import { Loader } from 'lucide-react';

export default function Spinner() {
	return (
		<div>
			<Loader className="h-10 w-10 mx-auto" color="blue" size="16" />
      <p className="mt-4 text-center text-[16px] tracking-[5px] text-gray-700">Loading...</p>
		</div>
	);
}