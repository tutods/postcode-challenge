import React from 'react';

import { Hero } from '@pages/Home/partials/Hero';
import { HistoryList } from '@pages/Home/partials/HistoryList';

export const Home = () => {
	return (
		<main>
			<Hero />

			<HistoryList />
		</main>
	);
};
