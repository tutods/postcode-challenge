import { getAddressFromCoordinates } from '@api/services/getAddressFromCoordinates';
import { getPostcode } from '@api/services/getPostcode';
import { AirportLocation } from '@constants';
import { PostcodeDetails } from '@shared/types';
import { getDistanceBetweenCoordinates } from '@utils';

export const getAllDetailsFromPostcode = async (
	code: string
): Promise<PostcodeDetails | undefined> => {
	try {
		const {
			result: { latitude, longitude, postcode }
		} = await getPostcode(code);

		const distance = getDistanceBetweenCoordinates(
			{ lat: latitude, lon: longitude },
			AirportLocation
		);

		if (latitude && longitude) {
			const {
				address: { shop, road, suburb, state, country },
				display_name
			} = await getAddressFromCoordinates(latitude, longitude);

			return {
				name: display_name,
				coordinates: {
					lat: latitude,
					lon: longitude
				},
				postcode: postcode,
				address: {
					shop,
					road,
					suburb,
					state,
					country
				},
				distance
			};
		}

		return {
			coordinates: {
				lat: latitude,
				lon: longitude
			},
			postcode: postcode,
			distance
		};
	} catch (error) {
		console.error(error);
		return;
	}
};
