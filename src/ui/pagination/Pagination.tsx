import * as React from 'react';
import './Pagination.scss';
import { Box } from '../box/Box';
import { ReactNode, useContext, useEffect, useState } from 'react';
import { Button } from '../button/Button';
import { AppUtils } from '../../utils';
import { Icon } from '../icon/Icon';
import classNames from 'classnames';
import { FrameworkContext } from '../frameworkSettings/FrameworkSettings';
import { Link } from '../../996';

export interface PaginationProps {
	totalContent: number; //The total number of items in the database
	contentPerPage: number; // How many items you will show per page
	currentPage: number; //Active Page in view;
	onPageSelect: (currentPage: number) => void;
	hidePrevButton?: boolean;
	hideNextButton?: boolean;
	hideFirstPageTab?: boolean;
	hideLastPageTab?: boolean;
	showFirstButton?: boolean;
	showLastButton?: boolean;
	isLinkButton?: boolean;
	linkPrefix?: string;
	//Needs to be implemented
	//viewRange: number
}

const Pagination: React.FC<PaginationProps> = (props) => {
	const [totalPagesToView, setTotalPagesToView] = useState<number[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(props.currentPage);
	const { pagination } = useContext(FrameworkContext);
	const { icons } = pagination;

	useEffect(() => {
		setCurrentPage(props.currentPage);
	}, [props.currentPage]);

	useEffect(() => {
		const totalPagesCount = getTotalPageCount();
		const totalPagesArray = getTotalPageArray();

		const firstPage = totalPagesArray[0];

		let nextNumberSiblingsToShow = currentPage + 2 >= totalPagesCount ? totalPagesCount : currentPage + 1;
		if (nextNumberSiblingsToShow < 5) nextNumberSiblingsToShow = 5;

		let previousNumberSiblingsToShow = currentPage - 1 <= firstPage + 2 ? 0 : currentPage - 2;
		if (previousNumberSiblingsToShow > totalPagesCount - 5) previousNumberSiblingsToShow = totalPagesCount - 5;

		let newArray = totalPagesArray.slice(previousNumberSiblingsToShow, nextNumberSiblingsToShow);

		setTotalPagesToView(newArray);
	}, [props.totalContent, props.contentPerPage, currentPage]);

	function getTotalPageCount() {
		return Math.ceil(props.totalContent / props.contentPerPage);
	}

	function getTotalPageArray() {
		let totalPageArray = Array.from({ length: getTotalPageCount() }, (value, index) => index + 1);
		if (totalPageArray.length < 1) return [1];

		return totalPageArray;
	}

	function renderPageTabs() {
		const pageTabs: React.ReactNode[] = totalPagesToView.map((item) => {
			return renderTab(item);
		});

		let totalPages = getTotalPageCount();

		return [
			...(!totalPagesToView.includes(1) && !props.hideFirstPageTab
				? [
						renderTab(1),
						<span key={'ellipsesLeft'} className={'ellipsesDots'}>
							...
						</span>
				  ]
				: []),
			...pageTabs,
			...(!totalPagesToView.includes(totalPages) && !props.hideLastPageTab
				? [
						<span key={'ellipsesRight'} className={'ellipsesDots'}>
							...
						</span>,
						renderTab(totalPages)
				  ]
				: [])
		];
	}

	function renderTab(value: number): ReactNode {
		return (
			<Button
				path={props.isLinkButton ? `${props.linkPrefix || '/'}${value}` : undefined}
				key={value}
				className={classNames(currentPage === value ? 'selectedPageTab' : 'notSelectedPageTab')}
				look={'none'}
				disableRipple
				onClick={() => {
					AppUtils.hapticFeedBack('Light');
					setCurrentPage(value);
					props.onPageSelect(value);
				}}
			>
				{value}
			</Button>
		);
	}

	return (
		<Box className={'rsPagination'}>
			{!!getTotalPageCount() && props.showFirstButton && (
				<Icon
					className={classNames({ disabled: currentPage === 1 })}
					iconImg={icons.firstButton}
					onClick={() => {
						if (currentPage === 1) return;
						setCurrentPage(1);
						props.onPageSelect(1);
					}}
					cursorPointer={currentPage !== 1}
				/>
			)}
			{!!getTotalPageCount() && !props.hidePrevButton && (
				<Button
					disabled={currentPage === 1}
					path={props.isLinkButton ? `${props.linkPrefix || '/'}${currentPage - 1}` : undefined}
					look={'iconNone'}
					onClick={() => {
						if (currentPage === 1) return;
						let nextPage = currentPage - 1 < 1 ? 1 : currentPage - 1;
						setCurrentPage(nextPage);
						props.onPageSelect(nextPage);
					}}
					icon={[
						{
							position: 'LEFT',
							className: classNames({ disabled: currentPage === 1 }),
							iconImg: icons.prevButton,
							cursorPointer: false
						}
					]}
				/>
				// <Icon
				// 	className={classNames({ disabled: currentPage === 1 })}
				// 	iconImg={icons.prevButton}
				// 	onClick={() => {
				// 		if (currentPage === 1) return;
				// 		let nextPage = currentPage - 1 < 1 ? 1 : currentPage - 1;
				// 		setCurrentPage(nextPage);
				// 		props.onPageSelect(nextPage);
				// 	}}
				// 	cursorPointer
				// />
			)}
			{renderPageTabs()}
			{!!getTotalPageCount() && !props.hideNextButton && (
				<Icon
					className={classNames({ disabled: currentPage === getTotalPageCount() })}
					iconImg={icons.nextButton}
					onClick={() => {
						if (currentPage === getTotalPageCount()) return;
						let nextPage = getTotalPageCount() < currentPage + 1 ? getTotalPageCount() : currentPage + 1;
						setCurrentPage(nextPage);
						props.onPageSelect(nextPage);
					}}
					cursorPointer
				/>
			)}
			{!!getTotalPageCount() && props.showLastButton && (
				<Icon
					className={classNames({ disabled: currentPage === getTotalPageCount() })}
					iconImg={icons.lastButton}
					onClick={() => {
						if (currentPage === getTotalPageCount()) return;
						setCurrentPage(getTotalPageCount);
						props.onPageSelect(getTotalPageCount());
					}}
					cursorPointer
				/>
			)}
		</Box>
	);
};

export { Pagination };
