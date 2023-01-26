import * as React from 'react';
import './InputPhone.scss';
import { Box } from '../box/Box';
import PhoneInput from 'react-phone-input-2';

interface InputPhoneProps {}

const InputPhone: React.FC<InputPhoneProps> = (props) => {
	return (
		<Box className={'rsInputPhone'}>
			<PhoneInput />
		</Box>
	);
};

export default InputPhone;
