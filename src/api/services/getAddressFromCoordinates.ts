import { geocodeApi } from '@/api';
import { GeocodeReverseResponse } from '@shared/types';

// Example: https://geocode.maps.co/reverse?lat=51.560414&lon=-0.116805
export const getAddressFromCoordinates = async (
	lat: number,
	lon: number
): Promise<GeocodeReverseResponse> => {
	const { data } = await geocodeApi.get<GeocodeReverseResponse>('/reverse', {
		params: {
			lat,
			lon
		}
	});

	return data;
};
