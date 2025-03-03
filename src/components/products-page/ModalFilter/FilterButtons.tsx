import React from 'react';
import { products, productsType } from '../../../dataBase/data';
interface FiltersButtonsProps {
	handleSizeSelectClick: (size: string) => void;
	handleSelectedTypeClick: (type: string) => void;
	selectedSizes: string[];
	selectedTypes: string[];
}
type TsizesOrNullArr = (string | null)[];
const FiltersButtons: React.FC<FiltersButtonsProps> = ({
	handleSizeSelectClick,
	handleSelectedTypeClick,
	selectedSizes,
	selectedTypes,
}) => {
	let arr: TsizesOrNullArr = [];
	for (let i = 0; i < products.length; i++) {
		const { size } = products[i];

		if (Array.isArray(size)) {
			for (let j = 0; j < size.length; j++) {
				if (!arr.includes(size[j]) && size[j]) {
					arr.push(size[j]);
				}
			}
		} else if (size && !arr.includes(size)) {
			arr.push(size);
		}
	}

	let filteredArray = arr.filter(el => el) as string[];

	return (
		<div>
			<div className='flex gap-2 flex-col'>
				<h1>Տեսակ</h1>
				<div className='flex flex-wrap gap-2'>
					<button
						onClick={() => handleSelectedTypeClick('Բոլորը')}
						className={`border border-primaryDarkBlue ${
							selectedTypes.length === 0 || selectedTypes.includes('Բոլորը')
								? 'bg-primaryDarkBlue text-white'
								: ''
						} px-5 py-[10px] `}
					>
						Բոլորը
					</button>

					{productsType.map(el => (
						<button
							key={el.id}
							onClick={() => handleSelectedTypeClick(el.name)}
							className={`border border-primaryDarkBlue px-5 py-[10px] ${
								selectedTypes.includes(el.name)
									? 'bg-primaryDarkBlue text-white'
									: ''
							}`}
						>
							{el.name}
						</button>
					))}
				</div>
			</div>
			<div className='flex flex-wrap gap-2 pb-5'>
				<h1>Չափ</h1>
				<div className='flex flex-wrap gap-2'>
					{filteredArray.map((el, i) => (
						<button
							key={i}
							onClick={() => handleSizeSelectClick(el)}
							className={`border border-primaryDarkBlue px-5 py-[10px] ${
								selectedSizes.includes(el)
									? 'bg-primaryDarkBlue text-white'
									: ''
							}`}
						>
							{el}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default FiltersButtons;
