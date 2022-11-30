export function getComponentTsxTemplate(name) {
	return `import * as React from 'react';
import './${name}.scss';
import { Box } from '@redskytech/framework/ui';
						
export interface ${name}Props {
}
						
const ${name} : React.FC<${name}Props> = (props) => {
	return (
		<Box className={'rs${name}'}>
						            			
		</Box>
	)
};
						
export default ${name};
`;
}

export function getComponentScssTemplate(name) {
	return `@import "src/themes/themes";

.rs${name} {
    
}
`;
}

export function getPageTsxTemplate(name) {
	return `import * as React from 'react';
import './${name}.scss';
import { Page } from '@redskytech/framework/996';

interface ${name}Props {
}

const ${name} : React.FC<${name}Props> = (props) => {
	return (
		<Page className={'rs${name}'}>
            			
		</Page>
	)
};

export default ${name}};
`;
}

export function getPageScssTemplate(name) {
	return `@import "src/themes/themes";

.rs${name} {
    
}
`;
}

export function getPopupTsxTemplate(name) {
	return `import * as React from 'react';
import './${name}Popup.scss';
import { Box, Popup, PopupProps } from '@redskytech/framework/ui';

export interface ${name}PopupProps extends PopupProps {}

const ${name}Popup: React.FC<${name}PopupProps> = (props) => {
	return (
		<Popup {...props} preventCloseByBackgroundClick className={'rs${name}PopupContainer'}>
			<Box className={'rs${name}Popup'}>
				
			</Box>
		</Popup>
	);
};

export default ${name}Popup;
`;
}

export function getPopupScssTemplate(name) {
	return `@import 'src/themes/themes';

.rs${name}Popup {
	width: 100%;
	max-width: 744px;
	position: absolute;
	background: green;
	box-shadow: 1px 3px 8px -4px rgba(0, 0, 0, 0.3);
	z-index: 10;

	.content {
		
	}
}
`;
}