import * as React from 'react';
import './TestPopup.scss';
import { Label, Popup, PopupProps, Button, popupController } from '../../../../src/ui';

export interface TestPopupProps extends PopupProps {}

const TestPopup: React.FC<TestPopupProps> = (props) => {
	return (
		<Popup {...props}>
			<div className={'rsTestPopup'}>
				<Label variant={'display1'} weight={'regular'}>
					This is a test popup
				</Label>
				<Button
					look={'containedPrimary'}
					onClick={() => {
						popupController.close(TestPopup);
					}}
					m={'10px auto'}
				>
					Close Me
				</Button>
			</div>
		</Popup>
	);
};

export default TestPopup;
