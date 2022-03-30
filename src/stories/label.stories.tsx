import * as React from 'react';

import { ComponentMeta } from '@storybook/react';

import { Label } from '../ui'

export default {
   /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
   title: 'label',
   component: Label,
} as ComponentMeta<typeof Label>;

export const H1TagHere = () => <Label  variant={'h1'}/>;
export const PrimarySomethingHere = () => <Label  variant={'h2'}/>;