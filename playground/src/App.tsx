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
import { useInitAnimateOnScroll } from '../../src/ui/animateOnScroll/AnimateOnScroll';
import { rsLabelInputText } from '../../src/ui/labelInputText/LabelInputText';
import { rsLabelInputTextarea } from '../../src/ui/labelInputTextarea/LabelInputTextarea';
import { rsLabelSelect } from '../../src/ui/labelSelect/LabelSelect';

function App() {
	const [formGroup, setFormGroup] = useState<RsFormGroup>(
		new RsFormGroup([new RsFormControl<string>('test', '', [new RsValidator(RsValidatorEnum.REQ, 'Required')])])
	);

	rsLabelInputText.setLabelProps({
		color: 'green',
		variant: 'subheader1',
		weight: 'extraBlack'
	});

	rsLabelInputTextarea.setLabelProps({
		color: 'teal',
		variant: 'subheader1',
		weight: 'extraBlack'
	});
	rsLabelSelect.setLabelProps({
		color: 'purple',
		variant: 'subheader1',
		weight: 'extraBlack'
	});

	useInitAnimateOnScroll();

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
