import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './reset.scss';
import { Chip, InputText, Label, InputNumber } from '../../src/ui';

function App() {
	const [value1, setValue1] = useState(42723);
	const [value2, setValue2] = useState(58151);
	const [value3, setValue3] = useState(2351.35);
	const [value4, setValue4] = useState(50);
	const [value5, setValue5] = useState(151351);
	const [value6, setValue6] = useState(115744);
	const [value7, setValue7] = useState(635524);
	const [value8, setValue8] = useState(732762);
	const [value9, setValue9] = useState(1500);
	const [value10, setValue10] = useState(2500);
	const [value11, setValue11] = useState(4250);
	const [value12, setValue12] = useState(5002);
	const [value13, setValue13] = useState(20);
	const [value14, setValue14] = useState(50);
	const [value15, setValue15] = useState(10);
	const [value16, setValue16] = useState(20);
	const [value17, setValue17] = useState(20);
	const [value18, setValue18] = useState(10.5);
	const [value19, setValue19] = useState(25);
	const [value20, setValue20] = useState(50);

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

				<div>
					<div className="card">
						<h5>Numerals</h5>
						<div className="p-fluid grid formgrid">
							<div className="field col-12 md:col-3">
								<label htmlFor="integeronly">Integer Only</label>
								<InputNumber
									id="integeronly"
									value={value1}
									onValueChange={(e) => setValue1(e.value as number)}
								/>
							</div>
							<div className="field col-12 md:col-3">
								<label htmlFor="withoutgrouping">Without Grouping</label>
								<InputNumber
									id="withoutgrouping"
									value={value2}
									onValueChange={(e) => setValue2(e.value as number)}
									mode="decimal"
									useGrouping={false}
								/>
							</div>
							<div className="field col-12 md:col-3">
								<label htmlFor="minmaxfraction">Min-Max Fraction Digits</label>
								<InputNumber
									id="minmaxfraction"
									value={value3}
									onValueChange={(e) => setValue3(e.value as number)}
									mode="decimal"
									minFractionDigits={2}
									maxFractionDigits={5}
								/>
							</div>
							<div className="field col-12 md:col-3">
								<label htmlFor="minmax">Min-Max Boundaries</label>
								<InputNumber
									id="minmax"
									value={value4}
									onValueChange={(e) => setValue4(e.value as number)}
									mode="decimal"
									min={0}
									max={100}
								/>
							</div>

							<div className="field col-12 md:col-3">
								<label htmlFor="locale-user">User Locale</label>
								<InputNumber
									id="locale-user"
									value={value5}
									onValueChange={(e) => setValue5(e.value as number)}
									mode="decimal"
									minFractionDigits={2}
								/>
							</div>
							<div className="field col-12 md:col-3">
								<label htmlFor="locale-us">United States Locale</label>
								<InputNumber
									id="locale-us"
									value={value6}
									onValueChange={(e) => setValue6(e.value as number)}
									mode="decimal"
									locale="en-US"
									minFractionDigits={2}
								/>
							</div>
							<div className="field col-12 md:col-3">
								<label htmlFor="locale-german">German Locale</label>
								<InputNumber
									id="locale-german"
									value={value7}
									onValueChange={(e) => setValue7(e.value as number)}
									mode="decimal"
									locale="de-DE"
									minFractionDigits={2}
								/>
							</div>
							<div className="field col-12 md:col-3">
								<label htmlFor="locale-indian">Indian Locale</label>
								<InputNumber
									id="locale-indian"
									value={value8}
									onValueChange={(e) => setValue8(e.value as number)}
									mode="decimal"
									locale="en-IN"
									minFractionDigits={2}
								/>
							</div>
						</div>

						<h5>Currency</h5>
						<div className="grid p-fluid">
							<div className="field col-12 md:col-3">
								<label htmlFor="currency-us">United States</label>
								<InputNumber
									id="currency-us"
									value={value9}
									onValueChange={(e) => setValue9(e.value as number)}
									mode="currency"
									currency="USD"
									locale="en-US"
								/>
							</div>
							<div className="field col-12 md:col-3">
								<label htmlFor="currency-germany">Germany</label>
								<InputNumber
									id="currency-germany"
									value={value10}
									onValueChange={(e) => setValue10(e.value as number)}
									mode="currency"
									currency="EUR"
									locale="de-DE"
								/>
							</div>
							<div className="field col-12 md:col-3">
								<label htmlFor="currency-india">India</label>
								<InputNumber
									id="currency-india"
									value={value11}
									onValueChange={(e) => setValue11(e.value as number)}
									mode="currency"
									currency="INR"
									currencyDisplay="code"
									locale="en-IN"
								/>
							</div>
							<div className="field col-12 md:col-3">
								<label htmlFor="currency-japan">Japan</label>
								<InputNumber
									id="currency-japan"
									value={value12}
									onValueChange={(e) => setValue12(e.value as number)}
									mode="currency"
									currency="JPY"
									locale="jp-JP"
								/>
							</div>
						</div>

						<h5>Prefix and Suffix</h5>
						<div className="grid p-fluid">
							<div className="field col-12 md:col-3">
								<label htmlFor="mile">Mile</label>
								<InputNumber
									id="mile"
									value={value13}
									onValueChange={(e) => setValue13(e.value as number)}
									suffix=" mi"
								/>
							</div>
							<div className="field col-12 md:col-3">
								<label htmlFor="percent">Percent</label>
								<InputNumber
									id="percent"
									value={value14}
									onValueChange={(e) => setValue14(e.value as number)}
									prefix="%"
								/>
							</div>
							<div className="field col-12 md:col-3">
								<label htmlFor="expiry">Expiry</label>
								<InputNumber
									id="expiry"
									value={value15}
									onValueChange={(e) => setValue15(e.value as number)}
									prefix="Expires in "
									suffix=" days"
								/>
							</div>
							<div className="field col-12 md:col-3">
								<label htmlFor="temperature">Temperature</label>
								<InputNumber
									id="temperature"
									value={value16}
									onValueChange={(e) => setValue16(e.value as number)}
									prefix="&uarr; "
									suffix="℃"
									min={0}
									max={40}
								/>
							</div>
						</div>

						<h5>Buttons</h5>
						<div className="grid p-fluid">
							<div className="field col-12 md:col-3">
								<label htmlFor="stacked">Stacked</label>
								<InputNumber
									id="stacked"
									value={value17}
									onValueChange={(e) => setValue17(e.value as number)}
									showButtons
									mode="currency"
									currency="USD"
								/>
							</div>
							<div className="field col-12 md:col-3">
								<label htmlFor="horizontal">Horizontal with Step</label>
								<InputNumber
									id="horizontal"
									value={value18}
									onValueChange={(e) => setValue18(e.value as number)}
									showButtons
									buttonLayout="horizontal"
									step={0.25}
									decrementButtonClassName="p-button-danger"
									incrementButtonClassName="p-button-success"
									incrementButtonIcon="pi pi-plus"
									decrementButtonIcon="pi pi-minus"
									mode="currency"
									currency="EUR"
								/>
							</div>
							<div className="field col-12 md:col-3">
								<label htmlFor="minmax-buttons">Min-Max Boundaries</label>
								<InputNumber
									id="minmax-buttons"
									value={value20}
									onValueChange={(e) => setValue20(e.value as number)}
									mode="decimal"
									showButtons
									min={0}
									max={100}
								/>
							</div>
						</div>

						<div className="grid">
							<div className="field col-12 md:col-3">
								<label htmlFor="vertical" style={{ display: 'block' }}>
									Vertical
								</label>
								<InputNumber
									id="vertical"
									value={value19}
									onValueChange={(e) => setValue19(e.value as number)}
									mode="decimal"
									showButtons
									buttonLayout="vertical"
									decrementButtonClassName="p-button-secondary"
									incrementButtonClassName="p-button-secondary"
									incrementButtonIcon="pi pi-plus"
									decrementButtonIcon="pi pi-minus"
								/>
							</div>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}

export default App;
