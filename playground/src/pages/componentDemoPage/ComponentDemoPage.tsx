import * as React from 'react';
import { Page } from '../../../../src/996';
import {
	Button,
	Chip,
	Icon,
	Checkbox,
	RsFormGroup,
	RsFormControl,
	RsValidator,
	RsValidatorEnum
} from '../../../../src/ui';
import router, { RoutePaths } from '../../router';
import { useState } from 'react';

const ComponentDemoPage: React.FC<{}> = (props) => {
	const [formGroup, setFormGroup] = useState<RsFormGroup>(
		new RsFormGroup([
			new RsFormControl<string>('textAreaTest', '', [new RsValidator(RsValidatorEnum.REQ, 'Required Textarea')]),
			new RsFormControl<boolean>('checkedKey', true, [new RsValidator(RsValidatorEnum.REQ, 'Required')])
		])
	);

	return (
		<Page className={'rsComponentDemoPage'}>
			<Chip
				labelVariant={'subtitle1'}
				label={'Click To Go Back'}
				look={'standard'}
				chipStyles={{ color: 'black' }}
				onClick={() => {
					router.navigate<RoutePaths>('/').catch(console.error);
				}}
			/>
			<Button mt={20} look={'containedPrimary'}>
				<Icon iconImg={'icon-close'} />I am a button
			</Button>

			<Checkbox
				updateControl={(control) => setFormGroup(formGroup.clone().update(control))}
				control={formGroup.get('checkedKey')}
				checked={formGroup.get<boolean>('checkedKey').value}
				labelVariant={'h1'}
				labelText={'This is a checkbox'}
				look={'containedPrimary'}
			/>
		</Page>
	);
};

export default ComponentDemoPage;
