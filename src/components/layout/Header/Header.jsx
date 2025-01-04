import React from 'react';
import {
	BurgerMenu,
	IconsButton,
	faceBookIcon,
	instagramIcon,
	logo,
	phoneIcon,
} from '../../../index';

const Header = () => {
	return (
		<div className='flex justify-between items-center px-[240px] pt-6 max-w-2xl-1440:px-[100px] max-w-xl-1024:px-10'>
			<div className='relative h-[60px] w-10'>
				<img src={logo} alt='' />
			</div>
			<div className='flex max-w-xl-1024:hidden'>
				<ul className='flex font-DejaVu gap-[64px]'>
					<li>Գլխավոր</li>
					<li>Արտադրանք</li>
					<li>Մեր մասին</li>
					<li>Կապ</li>
				</ul>
			</div>
			<div className='flex items-center justify-center gap-3 max-w-xl-1024:hidden'>
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
			<BurgerMenu />
		</div>
	);
};

export default Header;
