import React from 'react';

const Button = ({ text, color, icon, hendleClick }) => {
	return (
		<button
			onClick={hendleClick}
			className={`bg-${color} px-6 py-3 text-white flex gap-3`}
		>
			{text}
			<img src={icon} alt='' />
		</button>
	);
};

export default Button;
