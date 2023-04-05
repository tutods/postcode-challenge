import { ReactNode, useState } from 'react';
import { ArrowContainer, Popover } from 'react-tiny-popover';
import clsx from 'clsx';

type Props = {
	children: ReactNode;
	tooltip: ReactNode;
	variant?: 'dark' | 'light';
	interaction?: 'hover' | 'click';
	showCursor?: boolean;
	className?: string;
	containerClassName?: string;
};

export const Tooltip = ({
	children,
	tooltip,
	variant = 'dark',
	interaction = 'hover',
	className,
	containerClassName = ''
}: Props) => {
	const [isOpen, setIsOpen] = useState(false);

	const isHover = interaction === 'hover';

	return (
		<Popover
			align="center"
			containerClassName="z-100"
			isOpen={isOpen}
			onClickOutside={() => setIsOpen(false)}
			positions={['top']}
			reposition={false}
			content={({ position, childRect, popoverRect, ...props }) => (
				<ArrowContainer
					arrowSize={6}
					childRect={childRect}
					popoverRect={popoverRect}
					position={position}
					arrowColor={clsx([
						{ '#FFF': variant === 'light' },
						{ '#09090b': variant === 'dark' }
					])}
					{...props}
				>
					<div
						className={clsx([
							'max-w-[300px] break-words rounded bg-red-500 px-4 py-2 text-sm',
							{ 'bg-zinc-900 text-white': variant === 'dark' },
							{
								'border border-zinc-200 bg-white text-zinc-900 dark:border-0':
									variant === 'light'
							},
							className
						])}
					>
						{tooltip}
					</div>
				</ArrowContainer>
			)}
		>
			{isHover ? (
				<div
					className={clsx(['inline-block max-w-max cursor-pointer', containerClassName])}
					onMouseLeave={() => setIsOpen(false)}
					onMouseOver={() => setIsOpen(true)}
				>
					{children}
				</div>
			) : (
				<div
					className={clsx(['inline-block max-w-max cursor-pointer', containerClassName])}
					onClick={(e) => {
						e.preventDefault();
						setIsOpen((prev) => !prev);
					}}
				>
					{children}
				</div>
			)}
		</Popover>
	);
};
