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
	Img,
	Select,
	InputText,
	InputNumber,
	InputTextarea,
	StarRating,
	LabelRadioButton,
	AnimateOnScroll,
	popupController
} from '../../../../src/ui';
import router, { RoutePaths } from '../../router';
import { useState } from 'react';
import classNames from 'classnames';
import { componentDemoPageData } from './ComponentDemoPage.data';
import TestPopup, { TestPopupProps } from '../../popups/testPopup/TestPopup';

enum FormKeys {
	TEXT_AREA_TEST = 'textAreaTest',
	CHECKED_KEY = 'checkedKey',
	EMAIL = 'email',
	EMAIL_IMMEDIATE_CHECK = 'emailImmediateCheck',
	NUMBER = 'number',
	SELECT = 'select',
	SELECT2 = 'select2'
}

const ComponentDemoPage: React.FC<{}> = (props) => {
	const [formGroup, setFormGroup] = useState<RsFormGroup>(
		new RsFormGroup([
			new RsFormControl<string>(FormKeys.TEXT_AREA_TEST, '', [
				new RsValidator(RsValidatorEnum.REQ, 'Required Textarea')
			]),
			new RsFormControl<boolean>(FormKeys.CHECKED_KEY, true, [new RsValidator(RsValidatorEnum.REQ, 'Required')]),
			new RsFormControl<string>(FormKeys.EMAIL, '', [
				new RsValidator(RsValidatorEnum.REQ, 'Required'),
				new RsValidator(RsValidatorEnum.EMAIL, 'Invalid Email')
			]),
			new RsFormControl<string>(FormKeys.EMAIL_IMMEDIATE_CHECK, '', [
				new RsValidator(RsValidatorEnum.REQ, 'Required'),
				new RsValidator(RsValidatorEnum.EMAIL, 'Invalid Email')
			]),
			new RsFormControl<number>(FormKeys.NUMBER, 0, [
				new RsValidator(RsValidatorEnum.CUSTOM, 'Invalid Number', (control) => {
					return control.value == 3;
				})
			]),
			new RsFormControl<number>(FormKeys.SELECT, 3, [
				new RsValidator(RsValidatorEnum.CUSTOM, 'Invalid Selection', (control) => {
					return control.value == 2;
				})
			]),
			new RsFormControl<number[]>(
				FormKeys.SELECT2,
				[1, 2],
				[
					new RsValidator(RsValidatorEnum.CUSTOM, 'Less than 2 selections', (control) => {
						return (control.value as number[]).length > 1;
					})
				]
			)
		])
	);

	return (
		<Page className={'rsComponentDemoPage'} {...componentDemoPageData}>
			<Label
				elementType={'p'}
				variant={'h5'}
				weight={'regular'}
				mb={16}
				bgColor={'#099109'}
				color={'white'}
				p={16}
			>
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
			<Label variant={'h5'} weight={'regular'} mb={16} mt={32} bgColor={'#099109'} color={'white'} p={16}>
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
					<Icon iconImg={'icon-close'} p={10} />
				</Box>
			</Button>

			<Label variant={'h5'} weight={'regular'} mb={16} mt={32} bgColor={'#099109'} color={'white'} p={16}>
				Checkbox Component
			</Label>
			<Checkbox
				updateControl={(control) => setFormGroup(formGroup.clone().update(control))}
				control={formGroup.get(FormKeys.CHECKED_KEY)}
				labelText={'This is another checkbox'}
				look={'containedPrimary'}
			/>

			<Label variant={'h5'} weight={'regular'} mb={16} mt={32} bgColor={'#099109'} color={'white'} p={16}>
				Img Component
			</Label>
			<Label variant={'subtitle1'} weight={'regular'} mb={16} mt={32}>
				ImageKit Resize (16:9)
			</Label>
			<Img
				src={'https://image.redskytech.io/vendoti/1642004088056-254883307.jpg'}
				alt={'Vendoti Image'}
				width={533}
				height={300}
			/>
			<Label variant={'subtitle1'} weight={'regular'} mb={16} mt={32}>
				External Disabled ImageKit
			</Label>
			<Img src={'https://www.placecage.com/128/128'} alt={'Nic Cage'} width={128} height={128} disableImageKit />
			<Label variant={'subtitle1'} weight={'regular'} mb={16} mt={32}>
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
			<Label variant={'subtitle1'} weight={'regular'} mb={16} mt={32}>
				Error loading image (show alternative Nic Cage Image)
			</Label>
			<Img
				mb={200}
				src={'https://some.badurlforerrortesting23.com'}
				alt={'Error Image'}
				width={128}
				height={128}
				onError={(event) => {
					console.log('Error loading image', event);
					return 'https://www.placecage.com/200/200';
				}}
			/>

			<Label variant={'h5'} weight={'regular'} mb={16} mt={32} bgColor={'#099109'} color={'white'} p={16}>
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

			<Label variant={'h5'} weight={'regular'} mb={16} mt={32} bgColor={'#099109'} color={'white'} p={16}>
				Select Component
			</Label>
			<Label variant={'h6'} weight={'regular'}>
				(NOT using FormControl)
			</Label>
			<Select
				mt={8}
				mb={16}
				value={{
					label: 'Option 2',
					value: 2
				}}
				options={[
					{
						label: 'Option 1',
						value: 1
					},
					{
						label: 'Option 2',
						value: 2
					}
				]}
				onChange={(newValue, actionMeta) => {
					console.log(newValue, actionMeta);
				}}
				isClearable
			/>
			<Label variant={'h6'} weight={'regular'}>
				(Using FormControl)
			</Label>
			<Select
				mt={8}
				mb={16}
				control={formGroup.get<string>(FormKeys.SELECT)}
				updateControl={(control) => {
					console.log(control);
					setFormGroup(formGroup.clone().update(control));
				}}
				options={[
					{
						label: 'Option 1',
						value: 1
					},
					{
						label: 'Option 2',
						value: 2
					}
				]}
				isClearable
			/>
			<Label variant={'h6'} weight={'regular'}>
				Creatable Select
			</Label>
			<Select
				mt={8}
				mb={16}
				options={[
					{
						label: 'Option 1',
						value: 1
					},
					{
						label: 'Option 2',
						value: 2
					}
				]}
				isCreatable
				onChange={(newValue) => {
					console.log(newValue);
				}}
				onCreateOption={(newValue) => {
					console.log('create: ', newValue);
				}}
			/>
			<Label variant={'h6'} weight={'regular'}>
				Multi Option Select (No Form Control)
			</Label>
			<Select
				isMulti
				mt={8}
				mb={16}
				options={[
					{
						label: 'Option 1',
						value: 1
					},
					{
						label: 'Option 2',
						value: 2
					}
				]}
				isClearable
				onChange={(newValue) => {
					console.log(newValue);
				}}
			/>
			<Label variant={'h6'} weight={'regular'}>
				Multi Option Select (With Form Control)
			</Label>
			<Select
				isMulti
				mt={8}
				options={[
					{
						label: 'Option 1',
						value: 1
					},
					{
						label: 'Option 2',
						value: 2
					}
				]}
				isClearable
				control={formGroup.get<number[]>(FormKeys.SELECT2)}
				updateControl={(control) => {
					console.log(control);
					setFormGroup(formGroup.clone().update(control));
				}}
			/>

			<Label variant={'h5'} weight={'regular'} mb={16} mt={32} bgColor={'#099109'} color={'white'} p={16}>
				Input Textarea
			</Label>
			<InputTextarea
				mb={16}
				placeholder={'Biography Here'}
				onChange={(value) => {
					console.log(value);
				}}
			/>

			<Label variant={'h5'} weight={'regular'} mb={16} mt={32} bgColor={'#099109'} color={'white'} p={16}>
				Input Text
			</Label>
			<Label variant={'h6'} weight={'regular'}>
				Email
			</Label>
			<InputText
				mb={16}
				icon={[
					{
						iconImg: 'icon-check',
						position: 'LEFT',
						marginRight: 5
					}
				]}
				inputMode={'email'}
				placeholder={'email'}
				control={formGroup.get(FormKeys.EMAIL)}
				updateControl={(control) => {
					setFormGroup(formGroup.clone().update(control));
				}}
			/>
			<Label variant={'h6'} weight={'regular'}>
				Email Immediate Validate
			</Label>
			<InputText
				mb={16}
				icon={[
					{
						iconImg: 'icon-check',
						position: 'LEFT',
						marginRight: 5
					}
				]}
				immediateValidate
				inputMode={'email'}
				placeholder={'email immediate'}
				control={formGroup.get(FormKeys.EMAIL_IMMEDIATE_CHECK)}
				updateControl={(control) => {
					setFormGroup(formGroup.clone().update(control));
				}}
			/>
			<Label variant={'h6'} weight={'regular'}>
				Phone
			</Label>
			<InputText
				mb={16}
				prefix={'Tel: '}
				inputMode={'tel'}
				placeholder={'(###) ###-####'}
				onChange={(value) => {
					console.log(value);
				}}
			/>
			<Label variant={'h6'} weight={'regular'}>
				Password
			</Label>
			<InputText
				type={'password'}
				inputMode={'text'}
				onChange={(value) => {
					console.log(value);
				}}
			/>

			<Label variant={'h5'} weight={'regular'} mb={16} mt={32} bgColor={'#099109'} color={'white'} p={16}>
				Input Number
			</Label>
			<Label variant={'h6'} weight={'regular'}>
				Simple Number
			</Label>
			<InputNumber
				control={formGroup.get(FormKeys.NUMBER)}
				updateControl={(control) => {
					setFormGroup(formGroup.clone().update(control));
				}}
			/>
			<Label variant={'h6'} weight={'regular'}>
				No separators
			</Label>
			<InputNumber
				useGrouping={false}
				onChange={(value) => {
					console.log(value);
				}}
			/>
			<Label variant={'h5'} weight={'regular'} mb={16} mt={32} bgColor={'#099109'} color={'white'} p={16}>
				Star Rating
			</Label>
			<Label variant={'subtitle1'} weight={'regular'}>
				Custom Icon Example using icomoon. Non-clickable
			</Label>
			<StarRating
				mb={16}
				rating={3}
				starSize={16}
				customIcon={{
					fullStarIcon: {
						iconImg: 'icon-star'
					},
					noStarIcon: {
						iconImg: 'icon-star-outline'
					}
				}}
			/>
			<Label variant={'subtitle1'} weight={'regular'}>
				Custom Icon - Clickable
			</Label>
			<StarRating
				mb={16}
				rating={0}
				starSize={16}
				customIcon={{
					fullStarIcon: {
						iconImg: 'icon-star'
					},
					noStarIcon: {
						iconImg: 'icon-star-outline'
					}
				}}
				onStarClicked={() => console.log('You clicked on the default star rating')}
				isClickable
			/>
			<Label variant={'subtitle1'} weight={'regular'}>
				2.2 Rating, Non-clickable
			</Label>
			<StarRating rating={2.2} starSize={16} starColor={'green'} mb={16} />
			<Label variant={'subtitle1'} weight={'regular'}>
				Large Stars, Clickable - Initial rating 3
			</Label>
			<StarRating
				rating={3}
				starSize={30}
				starColor={'purple'}
				onStarClicked={(rating) => console.log('You clicked on the default star rating: ', rating)}
				isClickable
			/>
			<Label variant={'h5'} weight={'regular'} mb={16} mt={32} bgColor={'#099109'} color={'white'} p={16}>
				Label Radio Button
			</Label>
			<LabelRadioButton
				className={classNames({ test: true })}
				radioName={'test'}
				value={'test'}
				onSelect={(value) => {
					console.log(value);
				}}
				label={{
					variant: 'subheader1',
					position: 'RIGHT',
					children: 'I am a radio button thing.',
					weight: 'regular'
				}}
			/>
			<Label variant={'h5'} weight={'regular'} mb={16} mt={32} bgColor={'#099109'} color={'white'} p={16}>
				Animate On Scroll
			</Label>
			<Label variant={'h6'} weight={'medium'}>
				Fade Up
			</Label>
			<AnimateOnScroll animationType={'fade-up'}>
				<Box bgColor={'green'} width={200} height={200} mb={200} />
			</AnimateOnScroll>
			<Label variant={'h6'} weight={'medium'}>
				Fade Down
			</Label>
			<AnimateOnScroll animationType={'fade-down'}>
				<Box bgColor={'green'} width={200} height={200} mb={200} />
			</AnimateOnScroll>

			<Label variant={'h5'} weight={'regular'} mb={16} mt={32} bgColor={'#099109'} color={'white'} p={16}>
				Popup Test
			</Label>
			<Button
				look={'containedPrimary'}
				onClick={() => {
					popupController.open<TestPopupProps>(TestPopup, {
						animateDurationMs: 3000,
						onRemoved: () => {
							console.log('I am gone!!!');
						}
					});
				}}
			>
				Click Me for popup
			</Button>
		</Page>
	);
};

export default ComponentDemoPage;
