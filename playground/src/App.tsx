import logo from './logo.svg';
import './App.scss';
import './reset.scss';
import {
	Chip,
	InputText,
	Label,
	popupController,
	RsFormControl,
	RsFormGroup,
	RsValidator,
	RsValidatorEnum
} from '../../src/ui';
import { useState } from 'react';

function App() {
	const [formGroup, setFormGroup] = useState<RsFormGroup>(
		new RsFormGroup([new RsFormControl<string>('test', '', [new RsValidator(RsValidatorEnum.REQ, 'Required')])])
	);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Hello Vite + React!</p>
				<Label
					variant={'h3'}
					onClick={async () => {
						if (!(await formGroup.isValid())) {
							setFormGroup(formGroup.clone());
							console.log('invalid');
							return;
						}
						let test = formGroup.toModel();
						console.log(test);
					}}
				>
					H3 Label
				</Label>
				<InputText
					type={'text'}
					control={formGroup.get('test')}
					updateControl={(control) => setFormGroup(formGroup.clone().update(control))}
				/>
				<Chip
					labelVariant={'subtitle1'}
					label={'Hello World'}
					look={'standard'}
					chipStyles={{ color: 'black' }}
				/>
			</header>
			{popupController.instance}
		</div>
	);
}

export default App;
