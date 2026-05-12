import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../ui';
import { useOnClickOutsideRef } from '../hooks';

const meta: Meta<typeof Button> = {
	title: 'Hook/useOnClickOutsideRef',
	component: Button
};

export default meta;

type Story = StoryObj<typeof Button>;

const ClickOutsideDemo = () => {
	const ref = useOnClickOutsideRef<HTMLDivElement>(() => {
		console.log('Click Outside');
	});

	return (
		<div ref={ref} style={{ width: 200, height: 200, backgroundColor: 'green' }}>
			Click Off here
		</div>
	);
};

export const Primary: Story = {
	render: () => <ClickOutsideDemo />
};
