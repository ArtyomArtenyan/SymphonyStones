import { useEffect, useState } from 'react';

const useFilters = products => {
	const [filteredProducts, setFilteredProducts] = useState(products);
	const [selectedFilters, setSelectedFilters] = useState({
		sizes: [],
		types: [],
	});

	useEffect(() => {
		const filtered = products.filter(product => {
			const sizeMatch = selectedFilters.sizes.length
				? selectedFilters.sizes.includes(product.size)
				: true;
			const typeMatch = selectedFilters.types.length
				? selectedFilters.types.includes(product.type)
				: true;
			return sizeMatch && typeMatch;
		});
		setFilteredProducts(filtered);
	}, [products, selectedFilters]);

	return {
		filteredProducts,
		selectedFilters,
		setSelectedFilters,
	};
};

export default useFilters;
