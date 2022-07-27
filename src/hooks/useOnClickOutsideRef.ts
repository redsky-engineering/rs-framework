import { useEffect, useRef } from 'react';

export function useOnClickOutsideRef(callback: () => void, initialValue = null) {
	const elementRef = useRef<HTMLElement>(initialValue);
	useEffect(() => {
		function handler(event: any) {
			if (!elementRef.current?.contains(event.target)) {
				callback();
			}
		}
		window.addEventListener('mouseup', handler);
		return () => window.removeEventListener('mouseup', handler);
	}, [callback]);
	return elementRef;
}
