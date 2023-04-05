import React from 'react';

import { Button } from '@components/ui/Button';
import { PostcodeCard } from '@components/ui/cards/Postcode';
import { Icon } from '@components/ui/Icon';
import { useLocationHistory } from '@hooks/useLocationHistory';

export const HistoryList = () => {
	const { history, removeLocation, clearHistory } = useLocationHistory();

	return (
		<section className="py-6">
			<div className="container mx-auto mb-4 flex items-center justify-between gap-4 px-4 md:px-0">
				<h2 className="text-xl font-bold">
					Location History{' '}
					<small className="text-xs font-medium">({history.length} of 3)</small>
				</h2>
				<Button
					disabled={!history.length}
					onClick={clearHistory}
					prefixIcon={<Icon name="clean" size="md" />}
					type="button"
					variant="danger"
				>
					Clear
				</Button>
			</div>
			<div className="container mx-auto flex flex-col gap-2 px-4 md:px-0">
				{history.map((data) => (
					<PostcodeCard key={data.postcode} details={data} onRemove={removeLocation} />
				))}
			</div>
		</section>
	);
};
