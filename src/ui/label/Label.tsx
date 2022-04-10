import * as React from 'react';
import './Label.scss';
// import { Box } from '@bit/redsky.framework.rs.996';

export interface LabelProps {
	variant: 'h1' | 'h2' | 'string';
}

const Label: React.FC<LabelProps> = (props) => {
	return <div className={'rsLabel'}>Hello World - {props.variant}</div>;
};

export default Label;
