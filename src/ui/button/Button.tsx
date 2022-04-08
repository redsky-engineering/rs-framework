import * as React from 'react';
// import './Button.scss';
// import { Box } from '@bit/redsky.framework.rs.996';

export interface ButtonProps {}

const Button: React.FC<ButtonProps> = (props) => {
	return <button className={'rsButton'}>{props.children}</button>;
};

console.log('test');
export default Button;
