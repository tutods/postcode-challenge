import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Tooltip } from '@components/ui/Tooltip';

export default {
	title: 'UI/Tooltip',
	component: Tooltip,
	argTypes: {
		variant: {
			options: ['dark', 'light'],
			control: { type: 'radio' }
		}
	}
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = ({ tooltip, children, ...args }) => (
	<Tooltip tooltip={tooltip} {...args}>
		{children}
	</Tooltip>
);

export const Default = Template.bind({});
Default.args = {
	tooltip: 'This is a tooltip',
	children: 'Hover to see tooltip'
};

export const WhiteVariant = Template.bind({});
WhiteVariant.args = {
	tooltip: 'This is a tooltip',
	children: 'Hover to see tooltip',
	variant: 'light'
};
