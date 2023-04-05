import { z } from 'zod';

export const PostcodeSchema = z.object({
	postcode: z
		.string({
			required_error: 'Please insert your postcode.',
			invalid_type_error: 'The insert postcode is invalid!'
		})
		.min(2, {
			message: 'The postcode need, at least, 2 characters.'
		})
});
