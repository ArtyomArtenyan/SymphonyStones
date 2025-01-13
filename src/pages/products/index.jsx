import React from 'react';
import ProductsSection from '../../components/products-page/ProductsSection';

const Products = () => {
	return (
		<div className='my-20 flex flex-col gap-20 px-[240px] max-w-2xl-1440:px-[100px] max-w-xl-1024:px-10  max-w-xl-1024:my-10 max-w-ss-480:px-5 '>
			<ProductsSection />
		</div>
	);
};

export default Products;
