export function getComponentTsxTemplate(name) {
	return `import * as React from 'react';
import './${name}.scss';
import { Box } from '@redskytech/framework/ui';
						
interface ${name}Props {
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
