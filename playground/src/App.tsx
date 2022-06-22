import './App.scss';
import './themes/reset.scss';
import '../icons/style.css';
import './themes/checkbox.scss';

import {
	popupController,
	RsFormControl,
	RsFormGroup,
	RsValidator,
	RsValidatorEnum,
	ToastContainer
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
			{popupController.instance}
			<ToastContainer />
		</div>
	);
}

export default App;
