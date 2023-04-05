import { ComponentStory } from '@storybook/react';

import { Button } from '@components/ui/Button';
import { Icon } from '@components/ui/Icon';

export default {
	title: 'UI/Button',
	component: Button,
	argTypes: {
		variant: {
			options: ['primary', 'danger', 'outline'],
			control: { type: 'radio' }
		},
		disabled: {
			control: { type: 'boolean' }
		}
	}
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	type: 'button',
	variant: 'primary',
	children: (
		<span>
			<strong>Button</strong> content
		</span>
	)
};

export const Disabled = Template.bind({});
Disabled.args = {
	type: 'button',
	variant: 'primary',
	disabled: true,
	sufixIcon: <Icon name="chevron-right" size="sm" />,
	children: (
		<span>
			<strong>Button</strong> content
		</span>
	)
};
Disabled.parameters = {
	docs: {
		description: {
			story: "On this story you can see the style applied to the button when it's disabled."
		}
	}
};

export const DangerVariant = Template.bind({});
DangerVariant.args = {
	type: 'button',
	variant: 'danger',
	children: (
		<span>
			<strong>Button</strong> content
		</span>
	)
};

export const OutlineVariant = Template.bind({});
OutlineVariant.args = {
	type: 'button',
	variant: 'outline',
	children: (
		<span>
			<strong>Button</strong> content
		</span>
	)
};

export const WithPrefixIcon = Template.bind({});
WithPrefixIcon.args = {
	type: 'button',
	variant: 'primary',
	prefixIcon: <Icon name="chevron-left" size="sm" />,
	children: (
		<span>
			<strong>Button</strong> content
		</span>
	)
};

export const WithSufixIcon = Template.bind({});
WithSufixIcon.args = {
	type: 'button',
	variant: 'primary',
	sufixIcon: <Icon name="chevron-right" size="sm" />,
	children: (
		<span>
			<strong>Button</strong> content
		</span>
	)
};
