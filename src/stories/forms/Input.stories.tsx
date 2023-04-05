import { ComponentStory } from '@storybook/react';

import { Input } from '@components/forms/Input';

export default {
	title: 'Forms/Input',
	component: Input
};

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
	name: 'name',
	id: 'name',
	requiredMark: true,
	required: true,
	label: 'Name',
	placeholder: 'Please insert your name...'
};

export const Disabled = Template.bind({});
Disabled.args = {
	name: 'name',
	id: 'name',
	requiredMark: true,
	required: true,
	label: 'Name',
	placeholder: 'Please insert your name...',
	disabled: true
};
