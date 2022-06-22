import * as React from 'react';
import { Page } from '../../../../src/996';
import {
	Button,
	Chip,
	Icon,
	Label,
	rsToastify,
	Box,
	Accordion,
	Checkbox,
	RsFormGroup,
	RsFormControl,
	RsValidator,
	RsValidatorEnum,
	Img
} from '../../../../src/ui';
import router, { RoutePaths } from '../../router';
import { useState } from 'react';
import RadioButtonGroup from '../../../../src/ui/radioButtonGroup/RadioButtonGroup';

const ComponentDemoPage: React.FC<{}> = (props) => {
	const [formGroup, setFormGroup] = useState<RsFormGroup>(
		new RsFormGroup([
			new RsFormControl<string>('textAreaTest', '', [new RsValidator(RsValidatorEnum.REQ, 'Required Textarea')]),
			new RsFormControl<boolean>('checkedKey', true, [new RsValidator(RsValidatorEnum.REQ, 'Required')])
		])
	);

	const [radioButtonFormGroup, setRadioButtonFormGroup] = useState<RsFormGroup>(
		new RsFormGroup([new RsFormControl<string>('radioGroup', 'apple', [])])
	);

	return (
		<Page className={'rsComponentDemoPage'}>
			<Label variant={'h5'} mb={16} bgColor={'#099109'} color={'white'} p={16}>
				Chip Component
			</Label>
			<Chip
				labelVariant={'subtitle1'}
				label={'Click To Go Back'}
				look={'standard'}
				chipStyles={{ color: 'black' }}
				onClick={() => {
					router.navigate<RoutePaths>('/').catch(console.error);
				}}
			/>
			<Label variant={'h5'} mb={16} mt={32} bgColor={'#099109'} color={'white'} p={16}>
				Button Component
			</Label>
			<Button
				mt={20}
				look={'containedPrimary'}
				small
				onClick={() => {
					rsToastify.error('error Hello Friend');
					rsToastify.success('success Hello Friend');
					rsToastify.custom('custom Hello Friend');
					rsToastify.warning('warning Hello Friend', 'Cheese');
					rsToastify.info('info Friend', 'Cheese', { autoClose: false });
				}}
			>
				<Box display={'flex'} alignItems={'center'}>
					<p>Hello World</p>
					<Icon iconImg={'icon-close'} />
				</Box>
			</Button>

			<Label variant={'h5'} mb={16} mt={32} bgColor={'#099109'} color={'white'} p={16}>
				Checkbox Component
			</Label>
			<Checkbox
				updateControl={(control) => setFormGroup(formGroup.clone().update(control))}
				control={formGroup.get('checkedKey')}
				checked={formGroup.get<boolean>('checkedKey').value}
				labelText={'This is a checkbox'}
				look={'containedPrimary'}
			/>

			<Label variant={'h5'} mb={16} mt={32} bgColor={'#099109'} color={'white'} p={16}>
				Img Component
			</Label>
			<Label variant={'subtitle1'} mb={16} mt={32}>
				ImageKit Resize (16:9)
			</Label>
			<Img
				src={'https://image.redskytech.io/vendoti/1642004088056-254883307.jpg'}
				alt={'Vendoti Image'}
				width={533}
				height={300}
			/>
			<Label variant={'subtitle1'} mb={16} mt={32}>
				External Disabled ImageKit
			</Label>
			<Img src={'https://www.placecage.com/128/128'} alt={'Nic Cage'} width={128} height={128} disableImageKit />
			<Label variant={'subtitle1'} mb={16} mt={32}>
				Error loading image (show default missing image)
			</Label>
			<Img
				src={'https://some.badurlforerrortesting.com'}
				alt={'Error Image'}
				width={128}
				height={128}
				onError={(event) => {
					console.log('Error loading image', event);
				}}
			/>
			<Label variant={'subtitle1'} mb={16} mt={32}>
				Error loading image (show alternative Nic Cage Image)
			</Label>
			<Img
				src={'https://some.badurlforerrortesting23.com'}
				alt={'Error Image'}
				width={128}
				height={128}
				onError={(event) => {
					console.log('Error loading image', event);
					return 'https://www.placecage.com/200/200';
				}}
			/>

			<Label variant={'h5'} mb={16} mt={32} bgColor={'#099109'} color={'white'} p={16}>
				Accordion Component
			</Label>
			<Accordion
				title={<h3>Click Me!</h3>}
				containerStyles={{ width: 'fit-content', maxWidth: '500px', mt: 20 }}
				headerStyles={{ bgColor: '#323232', padding: '8px 16px', color: 'white' }}
				drawerStyles={{ bgColor: 'grey', padding: '0 24px' }}
				expandIcon={{ defaultIcon: { color: 'red' } }}
			>
				<div>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi doloribus eaque et id in itaque
					magnam rem. Animi dolor esse inventore ipsa iste itaque minus mollitia sapiente sed sit?
				</div>
				<div>
					Aliquid architecto, delectus dolorem doloremque ducimus ex expedita fugit harum illum inventore
					molestias odio omnis porro quam quas qui quidem repudiandae sequi sunt unde vel vitae, voluptas
					voluptatem voluptates voluptatibus!
				</div>
				<div>
					Exercitationem molestiae quasi quos temporibus? Accusamus adipisci animi consectetur dolores error
					facilis harum hic laudantium neque nesciunt odio possimus praesentium provident quas quia saepe,
					sunt temporibus totam unde velit voluptas!
				</div>
				<div>
					Delectus distinctio earum, facilis fugit nemo quo vero? Ad aut culpa distinctio ducimus eligendi,
					eos fugit ipsam itaque officiis omnis porro quae recusandae repudiandae rerum sed ut vel voluptas
					voluptatum.
				</div>
				<div>
					Assumenda debitis, delectus dolore dolorum ea eius facere hic itaque iure maiores molestiae
					repellendus saepe tempora unde veritatis vero voluptas? Eligendi ex facere illum laudantium nostrum
					nulla odit vero, voluptate.
				</div>
				<div>
					Aliquid, amet asperiores aut autem distinctio dolore excepturi expedita fuga fugiat illum inventore
					iusto laborum magni nostrum odio sit totam? Aperiam blanditiis cupiditate ex fugit id iure mollitia
					nulla, tempora.
				</div>
				<div>
					Amet animi delectus explicabo nihil nisi. A ab architecto asperiores at beatae, deleniti distinctio
					dolore eaque, ex fuga itaque maiores minima, nulla praesentium quisquam quos reiciendis rem sed
					totam veritatis.
				</div>
				<div>
					Amet delectus doloribus earum excepturi fugit ipsa provident, quasi soluta veritatis voluptates? Ex
					hic illo, ipsum magni neque porro rerum saepe sequi similique vitae. Excepturi laboriosam non nulla
					quis sapiente.
				</div>
			</Accordion>

			<RadioButtonGroup
				control={radioButtonFormGroup.get('radioGroup')}
				updateControl={(control) => {
					setRadioButtonFormGroup(radioButtonFormGroup.clone().update(control));
				}}
				onChange={(value) => {
					console.log(value);
				}}
				bgColor={'green'}
				m={20}
				display={'grid'}
				gap={20}
				groupName={'food'}
				options={[
					{
						value: 'apple',
						label: 'Apple'
					},
					{
						value: 'banana',
						label: 'Banana'
					},
					{
						value: 'orange',
						label: 'Orange'
					}
				]}
				labelStyles={{ variant: 'subtitle1', position: 'RIGHT' }}
			/>
		</Page>
	);
};

export default ComponentDemoPage;
