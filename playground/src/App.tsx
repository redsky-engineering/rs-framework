import './App.scss';
import './themes/reset.scss';
import '../icons/style.css';
import {
	Button,
	Chip,
	Icon,
	InputText,
	InputTextarea,
	Label,
	popupController,
	RsFormControl,
	RsFormGroup,
	RsValidator,
	RsValidatorEnum
} from '../../src/ui';
import { useEffect, useState } from 'react';
import { View } from '../../src/996';
import router from './router';

function App() {
	const [formGroup, setFormGroup] = useState<RsFormGroup>(
		new RsFormGroup([
			new RsFormControl<string>('test', '', [new RsValidator(RsValidatorEnum.REQ, 'Required')]),
			new RsFormControl<string>('textAreaTest', '', [new RsValidator(RsValidatorEnum.REQ, 'Required Textarea')])
		])
	);

	useEffect(() => {
		router.tryToLoadInitialPath().catch(console.error);
	}, []);

	return (
		<div className="App">
			<View key="main" id="main" default initialPath="/" />
			{/*<header className="App-header">*/}
			{/*	<img src={logo} className="App-logo" alt="logo" />*/}
			{/*	<p>Hello Vite + React!</p>*/}
			{/*	<Label*/}
			{/*		variant={'h3'}*/}
			{/*		onClick={async () => {*/}
			{/*			if (!(await formGroup.isValid())) {*/}
			{/*				setFormGroup(formGroup.clone());*/}
			{/*				console.log('invalid');*/}
			{/*				return;*/}
			{/*			}*/}
			{/*			let test = formGroup.toModel();*/}
			{/*			console.log(test);*/}
			{/*		}}*/}
			{/*	>*/}
			{/*		H3 Label*/}
			{/*	</Label>*/}
			<InputText
				type={'text'}
				control={formGroup.get('test')}
				updateControl={(control) => setFormGroup(formGroup.clone().update(control))}
			/>
			<Chip labelVariant={'subtitle1'} label={'Hello World'} look={'standard'} chipStyles={{ color: 'black' }} />
			<Button
				mt={20}
				look={'containedPrimary'}
				onClick={async () => {
					console.log(await formGroup.isValid());
				}}
			>
				<Icon iconImg={'icon-close'} />I am a button
			</Button>
			{/*</header>*/}
			{popupController.instance}
		</div>
	);
}

export default App;
