import * as React from 'react';

import { ComponentMeta } from '@storybook/react';

import { Button } from '../ui';
import { useOnClickOutsideRef } from '../hooks';

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: 'Hook/useOnClickOutsideRef',
	component: Button
} as ComponentMeta<typeof Button>;

export const Primary = () => {
	const ref = useOnClickOutsideRef(() => {
		console.log('Click Outside');
	});

	return (
		// @ts-ignore
		<div ref={ref} style={{ width: 200, height: 200, backgroundColor: 'green' }}>
			Click Off here
		</div>
	);
};
