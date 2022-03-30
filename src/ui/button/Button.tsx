import * as React from 'react';
// import './Button.scss';
// import { Box } from '@bit/redsky.framework.rs.996';

interface ButtonProps {}

const Button: React.FC<ButtonProps> = (props) => {
	return <button className={'rsButton'}>{props.children}</button>;
};

export { Button };
