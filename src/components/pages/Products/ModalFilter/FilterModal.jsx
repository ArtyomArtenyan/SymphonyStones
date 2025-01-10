import React from 'react';
import { CloseIcon, FiltersButtons } from '../../../..';

const FilterModal = ({
	toggleMenu,
	handleSizeSelectClick,
	handleSelectedTypeClick,
	selectedSizes,
	selectedTypes,
	handleClear,
}) => {
	return (
		<div>
			<div
				onClick={toggleMenu}
				className='fixed inset-0 z-30 bg-black bg-opacity-50'
			></div>
			<div className='fixed left-1/2 top-1/2 z-40 -translate-y-1/2 -translate-x-1/2 transform'>
				<div className='bg-white flex flex-col w-[500px] p-5 gap-5 max-w-sm-600:w-screen max-w-sm-600:h-screen'>
					<div className='flex items-center justify-between pb-4 border-b'>
						<h1 className='font-ArmOmega text-[28px]'>Ֆիլտր</h1>
						<button onClick={toggleMenu}>
							<img src={CloseIcon} alt='' />
						</button>
					</div>
					<FiltersButtons
						handleSizeSelectClick={handleSizeSelectClick}
						handleSelectedTypeClick={handleSelectedTypeClick}
						selectedSizes={selectedSizes}
						selectedTypes={selectedTypes}
					/>
					<div className='w-full flex gap-2'>
						<button
							onClick={handleClear}
							className='w-full border border-primaryDarkBlue px-6 py-3'
						>
							Մաքրել
						</button>
						<button
							onClick={toggleMenu}
							className='w-full bg-primaryDarkBlue border border-primaryDarkBlue text-white px-6 py-3'
						>
							Ցուցադրել
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FilterModal;
