import { useEffect, useState } from 'react';
import { products } from '../dataBase/data';

interface Products {
	id: number;
	name: string;
	image: string;
	size?: string | string[] | null;
}

interface useFilteredProductsProps {
	selectedSizes: string[];
	selectedTypes: string[];
	isOpen: boolean;
}

const useFilteredProducts = ({
	selectedSizes,
	selectedTypes,
	isOpen,
}: useFilteredProductsProps) => {
	const [filteredProducts, setFilteredProducts] = useState<Products[]>([]);

	useEffect(() => {
		const filterProducts = () => {
			const filtered = products.filter(product => {
				const productSizes = Array.isArray(product.size)
					? product.size
					: product.size
					? [product.size]
					: [];

				const productTypes = product.name.toLowerCase().split(' ');

				const isSelectedAll = selectedTypes.includes('Բոլորը');

				const sizeMatches =
					selectedSizes.length === 0 ||
					selectedSizes.some(size => productSizes.includes(size));

				const typeMatches =
					selectedTypes.length === 0 ||
					isSelectedAll ||
					selectedTypes.some(type => productTypes.includes(type.toLowerCase()));

				return sizeMatches && typeMatches;
			});

			setFilteredProducts(filtered);
		};

		filterProducts();
	}, [selectedSizes, selectedTypes, isOpen]);

	return filteredProducts;
};

export default useFilteredProducts;
