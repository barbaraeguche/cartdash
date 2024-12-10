import { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

type InputProps = InputHTMLAttributes<HTMLInputElement>

export default function Input({ className, ...rest }: InputProps) {
	return (
		<input
			{...rest}
			className={clsx(
				'w-full rounded-md border border-gray-200 p-2 placeholder:text-gray-500 placeholder:text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-mint',
        className
			)}
		/>
	);
}