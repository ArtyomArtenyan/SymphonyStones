import React from 'react';

const IconsButton = ({ image, href }) => {
	let imgName = image.split('/');
	// console.log(imgName[imgName.length - 1]);

	return (
		<div>
			<div className='flex items-center  w-10 h-10 border-none rounded-full justify-center bg-primaryLightBlue'>
				<a href={href} target='blank'>
					<img src={image} alt={imgName[imgName.length - 1]} />
				</a>
			</div>
		</div>
	);
};

export default IconsButton;
