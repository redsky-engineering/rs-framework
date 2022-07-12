import * as React from 'react';
import { MouseEvent, useEffect, useState } from 'react';
import classNames from 'classnames';
import { transformProps } from '../../utils/internal';
import { ICommon } from '../../common/Interfaces';

export interface IconProps extends ICommon.SpacingProps {
	iconImg: string;
	color?: string;
	fontSize?: number;
	className?: string;
	onClick?: (event: MouseEvent<HTMLSpanElement>) => void;
	cursorPointer?: boolean;
}

const Icon: React.FC<IconProps> = (props) => {
	const { iconImg, className, onClick, ...styleProps } = props;
	const [iconImgSrc, setIconImgSrc] = useState<string>(iconImg);

	useEffect(() => {
		setIconImgSrc(iconImg);
	}, [iconImg]);

	return (
		<span
			className={classNames('rsIcon', className, iconImgSrc)}
			style={transformProps(styleProps)}
			onClick={onClick}
		/>
	);
};

export { Icon };
