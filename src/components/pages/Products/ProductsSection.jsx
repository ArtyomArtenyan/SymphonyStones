import React, { useState } from 'react';
import { products } from '../../../dataBase/data';
import Dot from '../../common/Dot/Dot';
import ProductsList from './ProductsList';

const ProductsSection = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const itemsInPage = 9;
	const indexOfLastItem = currentPage * itemsInPage;
	const indexOfFirstItem = indexOfLastItem - itemsInPage;
	const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
	console.log(currentItems);

	const totalPages = Math.ceil(products.length / itemsInPage);
	return (
		<div className='flex flex-col gap-10'>
			<div className='flex justify-center items-center gap-3 '>
				<Dot />
				<h1 className='font-ArmOmega text-[28px] text-primaryDarkBlue  max-w-xl-1024:text-[24px] max-w-ss-480:text-xl'>
					Արտադրանք
				</h1>
				<Dot />
			</div>
			<ProductsList items={currentItems} />
		</div>
	);
};

export default ProductsSection;
