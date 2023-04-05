export type GeocodeReverseResponse = {
	place_id: number;
	licence: string;
	powered_by: string;
	osm_type: string;
	osm_id: number;
	lat: string;
	lon: string;
	display_name: string;
	address: {
		shop: string;
		road: string;
		suburb: string;
		city_district: string;
		state_district: string;
		state: string;
		postcode: string;
		country: string;
		country_code: string;
	};
	boundingbox: string[];
};
