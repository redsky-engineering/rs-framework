import * as React from 'react';
import './Page.scss';
import { Box } from '../../ui';
import classNames from 'classnames';

interface PageProps {
	className?: string;
}

const Page: React.FC<PageProps> = (props) => {
	return <Box className={classNames('rsPage')}>{props.children}</Box>;
};

export default Page;
