import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { zodResolver } from '@hookform/resolvers/zod';
import { PostcodeSchema } from '@schemas';

import { getAllDetailsFromPostcode } from '@api/services';
import { Input } from '@components/forms/Input';
import { Button } from '@components/ui/Button';
import { useLocationHistory } from '@hooks/useLocationHistory';

export const Hero = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid }
	} = useForm<{ postcode: string }>({
		resolver: zodResolver(PostcodeSchema)
	});
	const { history, addLocation } = useLocationHistory();

	const onSubmit = async ({ postcode }: { postcode: string }) => {
		if (
			!!history.find((item) =>
				[item.postcode, item.postcode.replace(' ', '')].includes(postcode)
			)
		) {
			toast.error("This postcode it's already added!");
			return;
		}

		const response = await getAllDetailsFromPostcode(postcode);

		if (!response) {
			toast.error("Upps... We can't fetch data about this postcode.");
			return;
		}

		addLocation(response);
		toast.success('Postcode succesffuly added!');
	};

	return (
		<header className="flex min-h-[400px] items-center justify-center bg-zinc-800">
			<div className="container px-4 md:px-0">
				<h1 className="mb-1 text-center text-5xl font-bold text-white">
					Search by Postcode
				</h1>
				<p className="text-center text-zinc-300">
					Please insert your postcode on the input below to get all the details.
				</p>

				<form
					className="mt-4 flex items-start justify-center gap-2"
					onSubmit={handleSubmit(onSubmit)}
				>
					<Input
						className="bg-transparent text-white focus:bg-transparent"
						containerClassName="inline-block flex-grow md:max-w-md"
						placeholder="Insert your postcode"
						type="string"
						{...register('postcode')}
						error={errors?.postcode}
					/>
					<Button disabled={!isValid}>Send</Button>
				</form>
			</div>
		</header>
	);
};
