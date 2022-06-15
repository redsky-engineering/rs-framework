import './App.scss';
import './themes/reset.scss';
import '../icons/style.css';
import {
	Chip,
	InputText,
	Label,
	Button,
	popupController,
	RsFormControl,
	RsFormGroup,
	RsValidator,
	RsValidatorEnum,
	Icon
} from '../../src/ui';
import { useEffect, useState } from 'react';
import { View } from '../../src/996';
import router from './router';

function App() {
	const [formGroup, setFormGroup] = useState<RsFormGroup>(
		new RsFormGroup([new RsFormControl<string>('test', '', [new RsValidator(RsValidatorEnum.REQ, 'Required')])])
	);

	useEffect(() => {
		router.tryToLoadInitialPath().catch(console.error);
	}, []);

	return (
		<div className="App">
			<View key="main" id="main" default initialPath="/" />
			<Chip labelVariant={'subtitle1'} label={'Hello World'} look={'standard'} chipStyles={{ color: 'black' }} />
			<Button mt={20} look={'containedPrimary'}>
				<Icon iconImg={'icon-close'} />I am a button
			</Button>
			{/*</header>*/}
			{popupController.instance}
		</div>
	);
}

export default App;
