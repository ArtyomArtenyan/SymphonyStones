import { useEffect, useState } from 'react';
import { products } from '../../../../dataBase/data';

const useFilteredProducts = (
	selectedSizes,
	selectedTypes,
	isOpen,
	setLoading
) => {
	const [filteredProducts, setFilteredProducts] = useState([]);

	useEffect(() => {
		const filterProducts = () => {
			setLoading(true); // Start loading before the filtering process

			const filtered = products.filter(product => {
				const productSizes = Array.isArray(product.size)
					? product.size
					: [product.size];
				const productTypes = product.name.toLowerCase().split(' ');

				const isSelectedAll = selectedTypes.includes('Բոլորը');
				const selectedAllExeptAll =
					isSelectedAll &&
					!selectedTypes.includes('Բոլորը') &&
					selectedTypes.length === productTypes.length;

				const typeMatches = selectedTypes.some(
					type =>
						type &&
						typeof type === 'string' &&
						productTypes.includes(type.toLowerCase())
				);
				const sizeMatches = selectedSizes.some(size =>
					productSizes.includes(size)
				);

				return (
					isSelectedAll ||
					selectedAllExeptAll ||
					((selectedSizes.length === 0 || sizeMatches) &&
						(selectedTypes.length === 0 || typeMatches))
				);
			});

			setFilteredProducts(filtered);
			setLoading(false); // Stop loading after filtering
		};

		filterProducts();
	}, [isOpen, setLoading]);

	return filteredProducts;
};

export default useFilteredProducts;
