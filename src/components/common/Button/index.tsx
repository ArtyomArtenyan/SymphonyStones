import React from 'react';
interface ButtonProps {
	text: string;
	color: string;
	icon?: string;
	hendleClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({ text, color, icon, hendleClick }) => {
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
