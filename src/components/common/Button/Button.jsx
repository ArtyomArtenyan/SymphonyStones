import React from 'react';

const Button = ({ text, phoneNumber = '+37493220380' }) => {
	return (
		<div>
			<a href={`tel:${phoneNumber}`}>
				<button className='bg-primaryLightBlue px-6 py-3 text-white'>
					{text}
				</button>
			</a>
		</div>
	);
};

export default Button;
