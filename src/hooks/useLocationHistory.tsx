import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';

import { PostcodeDetails } from '@shared/types';
import { locationHistoryAtom } from '@store';

const STORAGE_KEY = 'history';

export const useLocationHistory = () => {
	const [history, setHistory] = useRecoilState(locationHistoryAtom);

	useEffect(() => {
		const storedData = localStorage.getItem(STORAGE_KEY);

		if (storedData && !['undefined', 'null'].includes(storedData)) {
			setHistory(JSON.parse(storedData));
		}
	}, []);

	const addLocation = (details: PostcodeDetails) => {
		setHistory((prev) => {
			let value = [...prev, details];

			if (prev.length >= 3) {
				value = [...prev.slice(1), details];
			}

			localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
			return value;
		});
	};
	const removeLocation = (postcode: string) => {
		setHistory((prev) => {
			const value = prev.filter(
				({ postcode: detailsPostcode }) => detailsPostcode !== postcode
			);
			localStorage.setItem(STORAGE_KEY, JSON.stringify(value));

			return value;
		});
		toast.success('Postcode successfully removed!');
	};

	const clearHistory = () => {
		setHistory([]);
		localStorage.removeItem(STORAGE_KEY);

		toast.success('Postcode history successfully cleared!');
	};

	return {
		history,
		addLocation,
		removeLocation,
		clearHistory
	};
};
