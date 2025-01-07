import React, { useEffect, useState } from 'react';
import { products } from '../../../dataBase/data';
import {
	Dot,
	FilterButton,
	ProductsList,
	ProductsPagination,
} from '../../../index';
import FilterModal from './FilterModal';

const ProductsSection = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [isOpen, setIsOpen] = useState(false);

	const itemsInPage = 9;
	const indexOfLastItem = currentPage * itemsInPage;
	const indexOfFirstItem = indexOfLastItem - itemsInPage;

	const [filteredProducts, setFilteredProducts] = useState(products);

	const [selectedSizes, setSelectedSizes] = useState([]);

	const [isShow, setIsShow] = useState(false);
	useEffect(() => {
		let filtered = products.filter(product => {
			const productSizes = Array.isArray(product.size)
				? product.size
				: [product.size];
			let matches = false;
			for (let j = 0; j < selectedSizes.length; j++) {
				if (productSizes.includes(selectedSizes[j])) {
					matches = true;
					break;
				}
			}
			return selectedSizes.length === 0 || matches;
		});
		setFilteredProducts(filtered);
	}, [isShow]);
	const currentItems = filteredProducts.slice(
		indexOfFirstItem,
		indexOfLastItem
	);
	const totalPages = Math.ceil(filteredProducts.length / itemsInPage);

	console.log(filteredProducts);

	const changePages = pageNum => {
		setCurrentPage(pageNum);
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	const toggleMenu = () => {
		setIsOpen(!isOpen);
		console.log('Menu toggled:', isOpen);
	};
	if (isOpen) {
		document.body.style.overflow = 'hidden';
	} else document.body.style.overflow = 'auto';

	const handleSizeSelectClick = size => {
		setSelectedSizes(prevSizes => {
			if (prevSizes.includes(size)) return prevSizes.filter(el => size !== el);
			else return [...prevSizes, size];
		});
	};

	const toggleShow = () => {
		setIsShow(!isShow);
	};

	const handleClear = () => {
		setSelectedSizes([]);
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
			<FilterButton toggleMenu={toggleMenu} />
			<ProductsList items={currentItems} />

			{isOpen && (
				<FilterModal
					toggleMenu={toggleMenu}
					handleSizeSelectClick={handleSizeSelectClick}
					selectedSizes={selectedSizes}
					toggleShow={toggleShow}
					handleClear={handleClear}
				/>
			)}

			<ProductsPagination
				totalPages={totalPages}
				currentPage={currentPage}
				pageClick={changePages}
			/>
		</div>
	);
};

export default ProductsSection;
