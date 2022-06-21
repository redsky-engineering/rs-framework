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
	RsValidatorEnum
} from '../../../../src/ui';
import router, { RoutePaths } from '../../router';
import { useState } from 'react';

const ComponentDemoPage: React.FC<{}> = (props) => {
	// rsToastify.setLabelVariants('h1', 'h2');
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
			<Button
				mt={20}
				look={'containedPrimary'}
				small
				onClick={() => {
					rsToastify.error('Hello Bitches');
					rsToastify.success('success Hello Bitches');
					rsToastify.custom('custom Hello Bitches');
					rsToastify.warning('warning Hello Bitches', 'Cheese');
					rsToastify.info('info Bitches', 'Cheese', { autoClose: false });
				}}
			>
				<Box display={'flex'} alignItems={'center'}>
					<p>Hello World</p>
					<Icon iconImg={'icon-close'} />
				</Box>
			</Button>

			<Checkbox
				updateControl={(control) => setFormGroup(formGroup.clone().update(control))}
				control={formGroup.get('checkedKey')}
				checked={formGroup.get<boolean>('checkedKey').value}
				labelVariant={'h1'}
				labelText={'This is a checkbox'}
				look={'containedPrimary'}
			/>

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
		</Page>
	);
};

export default ComponentDemoPage;
