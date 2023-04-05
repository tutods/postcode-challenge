import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import { FieldError } from 'react-hook-form';
import clsx from 'clsx';

type Props = InputHTMLAttributes<HTMLInputElement> & {
	label?: ReactNode;
	requiredMark?: boolean;
	error?: FieldError;
	className?: string;
	containerClassName?: string;
};

export const Input = forwardRef<HTMLInputElement, Props>(
	(
		{
			id,
			name,
			label,
			disabled = false,
			requiredMark,
			error,
			className = '',
			containerClassName = '',
			...props
		},
		ref
	) => {
		return (
			<div className={containerClassName}>
				{label && (
					<label
						htmlFor={id ?? name}
						className={clsx([
							'mb-1 flex items-center gap-1 text-xs font-bold dark:text-zinc-50',
							{ 'opacity-50': disabled }
						])}
					>
						{label}
						{requiredMark && <span className="text-red-600">*</span>}
					</label>
				)}
				<input
					{...props}
					aria-describedby={`${id ?? name}-error`}
					aria-invalid={!!error}
					disabled={disabled}
					id={id ?? name}
					name={name}
					ref={ref}
					className={clsx([
						'w-full flex-grow rounded border px-3 py-1.25 text-sm disabled:bg-gray-50 disabled:text-zinc-400 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-600',
						className,
						{
							'border-red-500 text-red-600 placeholder-red-400 focus:outline-none focus:ring-red-500':
								error
						},
						{
							'border-gray-400 focus:border-teal-500 focus:outline-none focus:ring-teal-500 dark:border-zinc-600':
								!error
						}
					])}
				/>
				{error && (
					<p
						className="mb-0 mt-1 break-all text-xs text-red-600"
						id={`${id ?? name}-error`}
					>
						{error.message}
					</p>
				)}
			</div>
		);
	}
);
