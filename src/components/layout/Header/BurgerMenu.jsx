import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { nav, socialLinks } from '../../../dataBase/data.js';
import { BurgerMenuIcon, CloseIcon, IconsButton } from '../../../index.js';

const BurgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	function toggleMenu() {
		setIsOpen(!isOpen);
	}
	if (isOpen) {
		document.body.style.overflow = 'hidden';
	} else document.body.style.overflow = 'auto';

	return (
		<div className='hidden max-w-xl-1024:block'>
			<button onClick={toggleMenu}>
				<img src={BurgerMenuIcon} alt='' />
			</button>
			<div
				className={`fixed right-0 top-0 z-50 flex h-full flex-col justify-between bg-white px-10 pb-6 pt-[110px] transform ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				} transition-transform duration-500 ease-in-out z-40`}
			>
				<button onClick={toggleMenu} className='absolute right-[40px] top-9'>
					<img src={CloseIcon} alt='' />
				</button>
				<ul className='flex w-[240px] flex-col gap-10'>
					{nav.map((el, i) => (
						<NavLink
							onClick={toggleMenu}
							key={i}
							to={`/${el.url}`}
							className={({ isActive }) =>
								isActive ? 'text-primaryDarkBlue' : ''
							}
						>
							{el.name}
						</NavLink>
					))}
				</ul>
				<div className='flex gap-3'>
					{socialLinks.map(link => (
						<div
							key={link.id}
							className={`flex items-center w-10 h-10 border-none rounded-full justify-center ${link.bgColor}`}
						>
							<IconsButton image={link.icon} href={link.href} />
						</div>
					))}
				</div>
			</div>
			{isOpen && (
				<div
					onClick={toggleMenu}
					className='fixed inset-0 z-30 bg-black opacity-50'
				></div>
			)}
		</div>
	);
};

export default BurgerMenu;
