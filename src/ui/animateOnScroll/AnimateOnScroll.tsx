import * as React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

type FadeAnimations =
	| 'fade'
	| 'fade-up'
	| 'fade-down'
	| 'fade-left'
	| 'fade-right'
	| 'fade-up-right'
	| 'fade-up-left'
	| 'fade-down-right'
	| 'fade-down-left';

type FlipAnimations = 'flip-up' | 'flip-down' | 'flip-left' | 'flip-right';

type SlideAnimations = 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right';

type ZoomAnimations =
	| 'zoom-in'
	| 'zoom-in-up'
	| 'zoom-in-down'
	| 'zoom-in-left'
	| 'zoom-in-right'
	| 'zoom-out'
	| 'zoom-out-up'
	| 'zoom-out-down'
	| 'zoom-out-left'
	| 'zoom-out-right';

export interface AnimateOnScrollProps {
	animationType: FadeAnimations | FlipAnimations | SlideAnimations | ZoomAnimations;
	offset?: number; // Change offset to trigger animations sooner or later (px)
	duration?: number; // Change offset to trigger animations sooner or later (px)
	easing?: Aos.easingOptions; // Choose timing function to ease elements in different ways
	delay?: number; // Delay animation (ms)
	anchor?: string; // Anchor element, whose offset will be counted to trigger animation instead of actual elements offset
	anchorPlacement?: Aos.anchorPlacementOptions; // Anchor placement - which one position of element on the screen should trigger animation
	once?: boolean; // Choose whether animation should fire once, or every time you scroll up/down to element
	style?: React.CSSProperties;
}

export const AnimateOnScroll: React.FC<AnimateOnScrollProps> = (props) => {
	let dataOptions = {
		'data-aos': props.animationType,
		...(props.offset && { 'data-aos-offset': props.offset }),
		...(props.duration && { 'data-aos-duration': props.duration }),
		...(props.easing && { 'data-aos-easing': props.easing }),
		...(props.anchor && { 'data-aos-anchor': props.anchor }),
		...(props.anchorPlacement && { 'data-aos-anchor-placement': props.anchorPlacement }),
		...(props.once && { 'data-aos-once': props.once }),
		...(props.delay && { 'data-aos-delay': props.delay })
	};
	return (
		<div className={'rsAnimateOnScroll'} {...dataOptions} style={props.style}>
			{props.children}
		</div>
	);
};

export function useInitAnimateOnScroll(options?: Aos.AosOptions) {
	useEffect(() => {
		Aos.init(options);
	}, [options]);
}
