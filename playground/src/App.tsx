import logo from './logo.svg';
import './App.scss';
import './reset.scss';
import '../icons/style.css';
import {
	Chip,
	InputText,
	Label,
	Button,
	Select,
	popupController,
	RsFormControl,
	RsFormGroup,
	RsValidator,
	RsValidatorEnum,
	Accordion
} from '../../src/ui';
import { useState } from 'react';

function App() {
	const [formGroup, setFormGroup] = useState<RsFormGroup>(
		new RsFormGroup([new RsFormControl<number>('test', 2, [new RsValidator(RsValidatorEnum.REQ, 'Required')])])
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
					chipStyles={{ color: 'black', mb: 20 }}
				/>
				<Button mt={20} mb={20} look={'containedPrimary'}>
					I am a button
				</Button>
				<Accordion
					title={<h3>OWO Bitch!</h3>}
					containerStyles={{ width: 'fit-content', maxWidth: '500px', mb: 20 }}
					headerStyles={{ bgColor: '#323232', padding: '8px 16px' }}
					expandIcon={{ defaultIcon: { color: 'red' } }}
				>
					<div>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi doloribus eaque et id in
						itaque magnam rem. Animi dolor esse inventore ipsa iste itaque minus mollitia sapiente sed sit?
					</div>
					<div>
						Aliquid architecto, delectus dolorem doloremque ducimus ex expedita fugit harum illum inventore
						molestias odio omnis porro quam quas qui quidem repudiandae sequi sunt unde vel vitae, voluptas
						voluptatem voluptates voluptatibus!
					</div>
					<div>
						Exercitationem molestiae quasi quos temporibus? Accusamus adipisci animi consectetur dolores
						error facilis harum hic laudantium neque nesciunt odio possimus praesentium provident quas quia
						saepe, sunt temporibus totam unde velit voluptas!
					</div>
					<div>
						Delectus distinctio earum, facilis fugit nemo quo vero? Ad aut culpa distinctio ducimus
						eligendi, eos fugit ipsam itaque officiis omnis porro quae recusandae repudiandae rerum sed ut
						vel voluptas voluptatum.
					</div>
					<div>
						Assumenda debitis, delectus dolore dolorum ea eius facere hic itaque iure maiores molestiae
						repellendus saepe tempora unde veritatis vero voluptas? Eligendi ex facere illum laudantium
						nostrum nulla odit vero, voluptate.
					</div>
					<div>
						Aliquid, amet asperiores aut autem distinctio dolore excepturi expedita fuga fugiat illum
						inventore iusto laborum magni nostrum odio sit totam? Aperiam blanditiis cupiditate ex fugit id
						iure mollitia nulla, tempora.
					</div>
					<div>
						Amet animi delectus explicabo nihil nisi. A ab architecto asperiores at beatae, deleniti
						distinctio dolore eaque, ex fuga itaque maiores minima, nulla praesentium quisquam quos
						reiciendis rem sed totam veritatis.
					</div>
					<div>
						Amet delectus doloribus earum excepturi fugit ipsa provident, quasi soluta veritatis voluptates?
						Ex hic illo, ipsum magni neque porro rerum saepe sequi similique vitae. Excepturi laboriosam non
						nulla quis sapiente.
					</div>
				</Accordion>

				<Select
					options={[
						{ label: 'One', value: 1 },
						{ label: 'two', value: 2 }
					]}
					control={formGroup.get<number>('test')}
					onRsFormChange={(event, control) => {
						console.log('event', event);
						console.log('control', control);
						setFormGroup(formGroup.clone().update(control));
					}}
				/>
			</header>
			{popupController.instance}
		</div>
	);
}

export default App;
