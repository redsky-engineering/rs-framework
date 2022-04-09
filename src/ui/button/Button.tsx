import * as React from 'react';
// import './Button.scss';
// import { Box } from '@bit/redsky.framework.rs.996';
import classNames from 'classnames';

export interface ButtonProps {}

const Button: React.FC<ButtonProps> = (props) => {
	return <button className={classNames('rsButton')}>{props.children}</button>;
};

export default Button;
