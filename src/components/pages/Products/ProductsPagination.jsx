import React from 'react';

const ProductsPagination = ({ totalPages, currentPage, pageClick }) => {
	const pageNumberArr = [];
	for (let i = 1; i <= totalPages; i++) {
		pageNumberArr.push(i);
	}

	return (
		<div>
			<div className='flex mt-20 items-center justify-center gap-2 max-w-xl-1024:mt-10'>
				{pageNumberArr.map(el => (
					<button
						onClick={() => pageClick(el)}
						key={el}
						className={`border text-primaryDarkBlue ${
							el === currentPage ? 'border-primaryDarkBlue' : 'border-none'
						} px-4 py-2`}
					>
						{el}
					</button>
				))}
			</div>
		</div>
	);
};

export default ProductsPagination;
