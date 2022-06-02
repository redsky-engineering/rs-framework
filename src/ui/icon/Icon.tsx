import * as React from 'react';
import { CSSProperties, MouseEvent, useEffect, useState } from 'react';
import classNames from 'classnames';
import { getSpacingProperties, spacingKeys } from '../../utils/internal';

export interface IconProps {
	iconImg: string;
	color?: string;
	size?: number;
	className?: string;
	onClick?: (event: MouseEvent<HTMLSpanElement>) => void;
	cursorPointer?: boolean;
	//spacing
	m?: string | number;
	mt?: string | number;
	mr?: string | number;
	mb?: string | number;
	ml?: string | number;
	mx?: string | number;
	my?: string | number;
	margin?: string | number;
	marginTop?: string | number;
	marginRight?: string | number;
	marginBottom?: string | number;
	marginLeft?: string | number;
	marginX?: string | number;
	marginY?: string | number;
}

const Icon: React.FC<IconProps> = (props) => {
	const [iconImgSrc, setIconImgSrc] = useState<string>(props.iconImg);
	useEffect(() => {
		setIconImgSrc(props.iconImg);
	}, [props.iconImg]);

	function handleStyles() {
		let filtered: any = {};
		let i: keyof typeof props;
		for (i in props) {
			if (i === 'm') {
				filtered['margin'] = props[i];
			} else if (spacingKeys.includes(i)) {
				let stylePropNames = getSpacingProperties(i);
				for (let propName of stylePropNames) {
					filtered[propName] = props[i];
				}
			} else if (i === 'cursorPointer') {
				filtered['cursor'] = props[i];
			} else if (i === 'size') {
				filtered['fontSize'] = props[i] + 'px';
			} else {
				filtered[i] = props[i];
			}
		}
		return filtered;
	}

	return (
		<span
			className={classNames('rsIcon', props.className, iconImgSrc)}
			style={handleStyles()}
			onClick={props.onClick}
		/>
	);
};

export { Icon };
