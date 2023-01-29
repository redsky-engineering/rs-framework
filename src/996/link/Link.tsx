import React, { MouseEvent } from 'react';
import { Router } from '../Router';
import classNames from 'classnames';
import './Link.scss';

export interface LinkProps {
	path: string;
	onClick?: (event: MouseEvent) => void;
	className?: string;
	router?: Router;
	noPointer?: boolean;
	external?: boolean;
	target?: 'blank' | 'self';
	children?: React.ReactNode;
}

const Link: React.FC<LinkProps> = (props) => {
	return (
		<a
			className={classNames('rsLink', props.className, { noPointer: props.noPointer })}
			href={props.path}
			onClick={(e) => {
				e.preventDefault();
				if (props.onClick) {
					props.onClick(e);
					return;
				}

				if (props.external && props.path) {
					if (props.target && props.target === 'blank') window.open(props.path, '_blank');
					else window.location.assign(props.path);
					return;
				}

				let globalRouterInstance = Router.getInstance();
				if (globalRouterInstance) globalRouterInstance.navigate(props.path);
				else if (props.router) props.router.navigate(props.path);
			}}
		>
			{props.children}
		</a>
	);
};

export { Link };
