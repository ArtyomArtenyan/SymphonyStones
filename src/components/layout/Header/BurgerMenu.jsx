import React, { useState } from 'react';
import {
	BurgerMenuIcon,
	CloseIcon,
	IconsButton,
	faceBookIcon,
	instagramIcon,
	phoneIcon,
} from '../../../index.js';

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
					<li className='text-md cursor-pointer font-DejaVu'>Գլխավոր</li>
					<li className='text-md cursor-pointer font-DejaVu'>Արտադրանք</li>
					<li className='text-md cursor-pointer font-DejaVu'>Մեր մասին</li>
					<li className='text-md cursor-pointer font-DejaVu'>Կապ</li>
				</ul>
				<div className='flex gap-3'>
					<IconsButton
						image={faceBookIcon}
						href={
							'https://www.facebook.com/people/Symphony-Stone/61565963601342/?mibextid=LQQJ4d&rdid=9wieZKzhqhhFCb6f&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F7Z46P4dT61QiACzD%2F%3Fmibextid%3DLQQJ4d'
						}
					/>
					<IconsButton
						image={instagramIcon}
						href={
							'https://www.instagram.com/symphonystone90/profilecard/?igsh=MWxqdjc3dXlpOXNjZg%3D%3D'
						}
					/>
					<IconsButton image={phoneIcon} />
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
