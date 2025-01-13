import React from 'react';

const IconsButton = ({ image, href }) => {
	let imgName = image.split('/');
	// console.log(imgName[imgName.length - 1]);

	return (
		<div>
			<a href={href} target='blank'>
				<img src={image} alt={imgName[imgName.length - 1]} />
			</a>
		</div>
	);
};

export default IconsButton;
