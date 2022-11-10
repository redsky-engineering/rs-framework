import * as React from 'react';
import { Page } from '../../../../src/996';
import { useRef, useState } from 'react';
import axios from 'axios';
import { PageQuery, RsDataTable, RsSortOrder } from '../../../../src/ui/dataTable/DataTable';
import { Box, InputText, Label, RsFormControl, RsFormGroup, Select, Button } from '../../../../src/ui';
import { Column, DataTable, DataTableFilterMeta, FilterMatchMode, FilterOperator } from 'primereact';

const DataTableDemoPage: React.FC = () => {
	const [tableData, setTableData] = useState<any>({ data: [], total: 0 });
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [formGroup, setFormGroup] = useState<RsFormGroup>(
		new RsFormGroup([new RsFormControl('searchTerm', '', []), new RsFormControl('role', '', [])])
	);
	const initialFilters = {
		primaryEmail: {
			operator: FilterOperator.AND,
			constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }]
		},
		role: {
			operator: FilterOperator.AND,
			constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }]
		},
		lastLoginOn: {
			operator: FilterOperator.AND,
			constraints: [{ value: null, matchMode: FilterMatchMode.DATE_AFTER }]
		},
		'socialMedia.facebookUrl': {
			operator: FilterOperator.AND,
			constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }]
		}
	};
	const [filters, setFilters] = useState<DataTableFilterMeta>(initialFilters);
	const dataTableRef = useRef<DataTable | null>(null);

	const headers = {
		'admin-portal': 'true',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		Accept: 'application/json, text/plain, */*',
		'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT, PATCH',
		authorization:
			'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjYxNjYzMjc4NTczLCJkYXRhIjp7ImlkIjoxNjM1OTUzNTA4NTI1LCJjb21wYW55SWQiOjIsImNvbXBhbnlQcmljZVR5cGVJZCI6bnVsbCwiYWZmaWxpYXRlSWQiOm51bGwsIm1vY2tVc2VySWQiOm51bGwsInByaW1hcnlFbWFpbCI6ImFkbWludXMwMUBwYWdlcy5jb20iLCJzaXRlTmFtZSI6bnVsbCwicm9sZSI6ImFkbWluIiwiYWNjZXNzU2NvcGVzIjpbInJlYWRfZ3JvdXAiLCJ3cml0ZV9ncm91cCIsInJlYWRfY29tcGFueSIsIndyaXRlX2NvbXBhbnkiLCJyZWFkX3JldmlldyIsIndyaXRlX3JldmlldyIsInJlYWRfdXNlciIsIndyaXRlX3VzZXIiLCJ3cml0ZV9jbXMiLCJlbWFpbF93cml0ZSIsImVtYWlsX3JlYWQiLCJ3cml0ZV9tZWRpYSIsImNhbl9tb2NrIiwicmVhZF9vcmRlciIsIndyaXRlX2ZsaXgiLCJyZWFkX2ZsaXgiLCJyZWFkX2xlYWRlcl9mbGl4Il19LCJpYXQiOjE2NjMyNzg2MzN9.BTh42gd4_MhfDqqryV-e2yFs3TV8Fms8ij5s4WhIoI-StGegl9_ZJHLdcCEUtw2lDfun8W-yReJ_dukTaNbRKcNTaCsoycnjv8laP4UJ1ap8Pcq_2jOTCsArny0dxV7F2nwURzH01z4C6sq_C9-PfZT2KbowCtL_tn9VCL1G87QZsOfx4JOFMzTp_bRqnA2eVb_HB2XPFUaLBZ1m0fRhnrP-OZdVqL7efTET5fv2vMh4D9YmwRfSaO-xNeob4kQGSUNyNIUR9wSRNwIvVpIhYWSa2tvdb_njyT3YKEEN_GgA6Wqz4Oz-ssYR3TgSCCbon4BzBwPhjmWu-Yroi_0Ihw'
	};

	function getData(pageQuery: PageQuery): void {
		const url = `https://admin.vendoti.com/api/v2/admin/user/paged?page=${pageQuery.page}&perPage=${
			pageQuery.perPage
		}&sortBy=${pageQuery.sortBy}&sortOrder=${pageQuery.sortOrder}${
			pageQuery.filter ? `&filter=${pageQuery.filter}` : ''
		}`;

		axios
			.get(url, { headers: headers })
			.then((res) => {
				setTableData(res.data);
			})
			.catch((e) => console.error(e));
	}

	function handleExport() {
		dataTableRef.current?.exportCSV();
	}

	function handleClearFilters() {
		setFilters(initialFilters);
	}

	return (
		<Page
			className={'rsDataTableDemoPage'}
			title={'Framework - Home Page'}
			description={'A nice long SEO description about this page specific page.'}
			ogTitle={'Fancy Title'}
			ogDescription={'A nice description'}
			ogImage={'https://www.placecage.com/c/200/200'}
		>
			<Label variant={'h5'} weight={'regular'} mb={16} mt={32} bgColor={'#099109'} color={'white'} p={16}>
				RsDataTable Component
			</Label>

			<RsDataTable
				data={tableData}
				filters={filters}
				header={
					<Box
						bgColor={'beige'}
						display={'flex'}
						justifyContent={'space-between'}
						alignItems={'center'}
						padding={20}
					>
						<InputText
							inputMode={'text'}
							placeholder={'Search by name...'}
							control={formGroup.get('searchTerm')}
							updateControl={(control) => {
								setFormGroup(formGroup.clone().update(control));
								setSearchTerm(control.value!.toString());
							}}
						/>
						<Box display={'flex'} gap={8}>
							<Button look={'containedPrimary'} onClick={handleClearFilters}>
								Clear Filters
							</Button>
							<Button look={'containedPrimary'} onClick={handleExport}>
								Export
							</Button>
						</Box>
					</Box>
				}
				globalFilter={searchTerm}
				globalFilterFields={['firstName', 'lastName']}
				sortField={'primaryEmail'}
				sortOrder={RsSortOrder.ASC}
				getData={getData}
				responsiveLayout={'scroll'}
				globalFilterDebounceMs={600}
				elementRef={dataTableRef}
				paginatorTemplate={
					'CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown'
				}
				currentPageReportTemplate={'Showing {first} to {last} of {totalRecords}'}
			>
				<Column field={'firstName'} header={'First Name'} sortable />
				<Column field={'lastName'} header={'Last Name'} sortable />
				<Column field={'primaryEmail'} header={'Email'} filter sortable />
				<Column
					field={'role'}
					header={'Role'}
					filter
					onFilterApplyClick={(e) =>
						setFilters({
							...filters,
							role: {
								...filters['role'],
								constraints: [{ value: formGroup.get('role').value, matchMode: FilterMatchMode.EQUALS }]
							}
						})
					}
					filterElement={
						<Select
							options={[
								{ label: 'Affiliate', value: 'affiliate' },
								{ label: 'Admin', value: 'admin' },
								{ label: 'Customer', value: 'customer' },
								{ label: 'Super Admin', value: 'superAdmin' }
							]}
							control={formGroup.get('role')}
							updateControl={(control) => setFormGroup(formGroup.clone().update(control))}
							placeholder="Select a Role"
						/>
					}
					sortable
				/>
				<Column field={'socialMedia.facebookUrl'} header={'Facebook'} filter sortable />
				<Column
					field={'lastLoginOn'}
					header={'Last Login'}
					dataType="date"
					filterType="date"
					body={(row: any) => {
						if (!row.lastLoginOn) return '';
						return new Date(row.lastLoginOn).toLocaleDateString();
					}}
					filter
					sortable
				/>
			</RsDataTable>
		</Page>
	);
};
export default DataTableDemoPage;
