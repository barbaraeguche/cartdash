import { ReactNode, ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

export default function Button({ children, className, ...rest }: ButtonProps) {
	return (
		<button
			{...rest}
			className={clsx(
				'flex items-center rounded-lg px-3 py-5 h-5 text-sm font-medium bg-mint hover:bg-mint-90 active:bg-mint-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint-100 transition-colors',
				className
			)}
		>
			{children}
		</button>
	);
}