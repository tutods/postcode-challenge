import { ComponentStory } from '@storybook/react';

import { Icon } from '@components/ui/Icon';

export default {
	title: 'UI/Icon',
	component: Icon
};

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
	name: 'chevron-right',
	size: 'xl'
};
