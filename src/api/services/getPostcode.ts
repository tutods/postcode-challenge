import { api } from '@/api';
import { PostcodeResponse } from '@shared/types';

export const getPostcode = async (postcode: string): Promise<PostcodeResponse> => {
	const { data } = await api.get<PostcodeResponse>(`/postcodes/${postcode}`);

	return data;
};
