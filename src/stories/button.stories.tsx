import * as React from 'react';

import { ComponentMeta } from '@storybook/react';

import { Button } from '../ui';

export default {
	title: 'Button',
	component: Button
} as ComponentMeta<typeof Button>;

export const Button1 = () => <Button>Click Me</Button>;
export const Button2 = () => <Button>Click Me 2</Button>;
