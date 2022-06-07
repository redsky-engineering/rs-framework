import logo from './logo.svg';
import './App.css';
import './reset.scss';
import { Chip, InputText, Label } from '../../src/ui';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Hello Vite + React!</p>
				<Label variant={'h3'}>H3 Label</Label>
				<InputText
					type={'text'}
					onChange={(event) => {
						console.log(event.target.value);
					}}
				/>

				<Chip
					labelVariant={'subtitle1'}
					label={'Hello World'}
					look={'standard'}
					chipStyles={{ color: 'black' }}
				/>
			</header>
		</div>
	);
}

export default App;
