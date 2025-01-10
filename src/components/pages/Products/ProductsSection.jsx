import React, { useState } from 'react';
import {
	Dot,
	FilterButton,
	ProductsList,
	ProductsPagination,
	useFilteredProducts,
} from '../../../index';
import FilterModal from './ModalFilter/FilterModal';

const ProductsSection = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [isOpen, setIsOpen] = useState(false);
	const [loading, setLoading] = useState(true);

	const itemsInPage = 9;
	const indexOfLastItem = currentPage * itemsInPage;
	const indexOfFirstItem = indexOfLastItem - itemsInPage;

	const [selectedSizes, setSelectedSizes] = useState([]);
	const [selectedTypes, setSelectedTypes] = useState([]);

	const filteredProducts = useFilteredProducts(
		selectedSizes,
		selectedTypes,
		isOpen,
		setLoading
	);

	const currentItems = filteredProducts.slice(
		indexOfFirstItem,
		indexOfLastItem
	);
	const totalPages = Math.ceil(filteredProducts.length / itemsInPage);

	const changePages = pageNum => {
		setCurrentPage(pageNum);
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	const toggleMenu = () => {
		setIsOpen(!isOpen);
		document.body.style.overflow = isOpen ? 'auto' : 'hidden';
	};

	const handleSizeSelectClick = size => {
		setSelectedSizes(prevSizes => {
			if (prevSizes.includes(size)) return prevSizes.filter(el => el !== size);
			else return [...prevSizes, size];
		});
	};

	const handleSelectedTypeClick = name => {
		if (name === 'Բոլորը') {
			setSelectedTypes(['Բոլորը']);
		} else {
			setSelectedTypes(prev => {
				const withoutMain = prev.filter(btnId => btnId !== 'Բոլորը');
				if (withoutMain.includes(name)) {
					return withoutMain.filter(btnId => btnId !== name);
				} else {
					return [...withoutMain, name];
				}
			});
		}
	};

	const handleClear = () => {
		setSelectedSizes([]);
		setSelectedTypes([]);
	};

	return (
		<div className='flex flex-col gap-10'>
			<div className='flex justify-center items-center gap-3'>
				<Dot />
				<h1 className='font-ArmOmega text-[28px] text-primaryDarkBlue max-w-xl-1024:text-[24px] max-w-ss-480:text-xl'>
					Արտադրանք
				</h1>
				<Dot />
			</div>
			{loading ? (
				<div className='flex justify-center items-center h-[50vh]'>
					<div className='loader'>Loading...</div>
				</div>
			) : filteredProducts.length === 0 ? (
				<>
					<div className='flex h-[50vh] w-full items-center justify-center text-center max-w-ss-480::text-md'>
						Նշված ֆիլտրերով արտադրանք առկա չէ
					</div>
					<FilterButton toggleMenu={toggleMenu} />
				</>
			) : (
				<>
					<FilterButton toggleMenu={toggleMenu} />
					<ProductsList items={currentItems} />
					<ProductsPagination
						totalPages={totalPages}
						currentPage={currentPage}
						pageClick={changePages}
					/>
				</>
			)}
			{isOpen && (
				<FilterModal
					toggleMenu={toggleMenu}
					handleSizeSelectClick={handleSizeSelectClick}
					handleSelectedTypeClick={handleSelectedTypeClick}
					selectedTypes={selectedTypes}
					selectedSizes={selectedSizes}
					handleClear={handleClear}
				/>
			)}
		</div>
	);
};

export default ProductsSection;
