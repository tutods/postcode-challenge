import { atom } from 'recoil';

import { PostcodeDetails } from '@shared/types';

export const locationHistoryAtom = atom<PostcodeDetails[]>({
	key: 'locationHistory',
	default: []
});
