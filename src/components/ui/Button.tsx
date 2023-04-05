import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
	prefixIcon?: JSX.Element;
	sufixIcon?: JSX.Element;
	variant?: 'primary' | 'danger' | 'outline';
};

export const Button = ({
	children,
	variant = 'primary',
	prefixIcon,
	sufixIcon,
	className = '',
	...props
}: Props) => {
	return (
		<button
			className={clsx([
				'cursor-pointer rounded-md border px-3 py-1 transition-all duration-300 ease-in-out disabled:cursor-not-allowed disabled:opacity-50',
				{
					'inline-flex items-center gap-1': !!prefixIcon || !!sufixIcon
				},
				{
					'border-transparent bg-teal-500 enabled:hover:bg-teal-700 enabled:hover:text-teal-50':
						variant === 'primary'
				},
				{
					'border-transparent bg-red-500 text-red-50 enabled:hover:bg-red-700':
						variant === 'danger'
				},
				{
					'border-teal-500 bg-transparent text-teal-500 enabled:hover:border-transparent enabled:hover:bg-teal-700 enabled:hover:text-teal-50':
						variant === 'outline'
				},
				className
			])}
			{...props}
		>
			{prefixIcon ? prefixIcon : null}
			{children}
			{sufixIcon ? sufixIcon : null}
		</button>
	);
};
