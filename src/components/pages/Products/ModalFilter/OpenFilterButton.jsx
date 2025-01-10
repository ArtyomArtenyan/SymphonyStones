import React from 'react';
import { settingIcon } from '../../../..';
import Button from '../../../common/Button/Button';

const FilterButton = ({ toggleMenu }) => {
	return (
		<div className='fixed bottom-6 left-1/2 -translate-x-1/2 transform z-20'>
			<Button
				hendleClick={toggleMenu}
				text={'Ֆիլտր'}
				color={'primaryDarkBlue'}
				icon={settingIcon}
			/>
		</div>
	);
};

export default FilterButton;
