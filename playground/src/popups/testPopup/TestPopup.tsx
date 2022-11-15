import * as React from 'react';
import './TestPopup.scss';
import { Label, Popup, PopupProps, Button, popupController, Box } from '../../../../src/ui';

export interface TestPopupProps extends PopupProps {}

const TestPopup: React.FC<TestPopupProps> = (props) => {
	const fullProps = popupController.convertProps(props);

	return (
		<Popup {...props} preventCloseByBackgroundClick>
			<div className={'rsTestPopup'}>
				<Label variant={'display1'} weight={'regular'}>
					This is a test popup (popup id = {fullProps.popupId})
				</Label>
				<Box display={'flex'} gap={24} mt={10}>
					<Button
						look={'containedPrimary'}
						onClick={() => {
							popupController.open(TestPopup);
						}}
					>
						Open another Popup
					</Button>
					<Button
						look={'containedPrimary'}
						onClick={() => {
							popupController.closeById(fullProps.popupId);
						}}
					>
						Close Only My Popup
					</Button>
					<Button
						look={'containedPrimary'}
						onClick={() => {
							popupController.closeAll();
						}}
					>
						Close All Popups
					</Button>
				</Box>
			</div>
		</Popup>
	);
};

export default TestPopup;
