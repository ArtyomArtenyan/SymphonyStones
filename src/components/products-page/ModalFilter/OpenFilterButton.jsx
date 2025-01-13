import React from 'react';
import { Button } from '../..';
import { SettingIcon } from '../../../assets/svgs';

const FilterButton = ({ toggleMenu }) => {
	return (
		<div className='fixed bottom-6 left-1/2 -translate-x-1/2 transform z-20'>
			<Button
				hendleClick={toggleMenu}
				text={'Ֆիլտր'}
				color={'primaryDarkBlue'}
				icon={SettingIcon}
			/>
		</div>
	);
};

export default FilterButton;
