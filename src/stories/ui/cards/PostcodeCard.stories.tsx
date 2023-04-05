import { ComponentStory } from '@storybook/react';

import { PostcodeCard } from '@components/ui/cards/Postcode';

export default {
	title: 'UI/Cards/PostCodeCard',
	component: PostcodeCard
};

const Template: ComponentStory<typeof PostcodeCard> = (args) => <PostcodeCard {...args} />;

export const Default = Template.bind({});
Default.args = {
	details: {
		name: 'British Heart Foundation, Sussex Way, Holloway, London Borough of Islington, Greater London, England, N7 6BU, United Kingdom',
		coordinates: { lat: 51.560414, lon: -0.116805 },
		postcode: 'N7 6RS',
		address: {
			shop: 'British Heart Foundation',
			road: 'Sussex Way',
			suburb: 'Holloway',
			state: 'England',
			country: 'United Kingdom'
		},
		distance: { km: 25.45, miles: 15.82 }
	}
};
