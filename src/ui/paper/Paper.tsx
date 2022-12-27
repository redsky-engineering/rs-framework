import * as React from 'react';
import './Paper.scss';
import { Box, BoxProps } from '../box/Box';

export interface PaperProps extends BoxProps {}

const Paper: React.FC<PaperProps> = (props) => {
	return <Box className={'rsPaper'} {...props} />;
};

export { Paper };
