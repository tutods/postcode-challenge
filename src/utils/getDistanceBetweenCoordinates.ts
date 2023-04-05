import haversine from 'haversine-distance';

import { Coordinate } from '@shared/types/Coordinate';
import { kmToMiles, metersToKm } from '@utils/convertDistances';

export const getDistanceBetweenCoordinates = (location1: Coordinate, location2: Coordinate) => {
	const distanceInMeters = haversine(location1, location2);
	const distanceInKm = metersToKm(distanceInMeters);

	return {
		km: Math.round(distanceInKm * 100) / 100,
		miles: Math.round(kmToMiles(distanceInKm) * 100) / 100
	};
};
