import * as React from 'react';
import './Page.scss';
import { Box } from '../../ui';
import classNames from 'classnames';

export interface PageProps {
	className?: string;
}

const Page: React.FC<PageProps> = (props) => {
	return <Box className={classNames('rsPage')}>{props.children}</Box>;
};

export { Page };
