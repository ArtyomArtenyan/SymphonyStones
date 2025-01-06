import React from 'react';
import {
	BurgerMenu,
	faceBookIcon,
	IconsButton,
	instagramIcon,
	logo,
	phoneIcon,
} from '../../../index';
const socialLinks = [
	{
		id: 1,
		name: 'Facebook',
		icon: faceBookIcon,
		href: 'https://www.facebook.com/people/Symphony-Stone/61565963601342/?mibextid=LQQJ4d&rdid=9wieZKzhqhhFCb6f&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F7Z46P4dT61QiACzD%2F%3Fmibextid%3DLQQJ4d',
		bgColor: 'bg-primaryLightBlue',
	},
	{
		id: 2,
		name: 'instagramIcon',
		icon: instagramIcon,
		href: 'https://www.instagram.com/symphonystone90/profilecard/?igsh=MWxqdjc3dXlpOXNjZg%3D%3D',
		bgColor: 'bg-primaryLightBlue',
	},
	{
		id: 3,
		name: 'Phone',
		icon: phoneIcon,
		href: 'tel:+37493220380',
		bgColor: 'bg-primaryLightBlue',
	},
];

const Header = () => {
	return (
		<div className='flex justify-between items-center px-[240px] pt-6 max-w-2xl-1440:px-[100px] max-w-xl-1024:px-10 max-w-ss-480:py-4 max-w-ss-480:px-5'>
			<div className='relative h-[60px] w-10 max-w-sm-600:w-[30px] max-w-sm-600:h-12'>
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
				{socialLinks.map(link => (
					<div
						key={link.id}
						className={`flex items-center w-10 h-10 border-none rounded-full justify-center ${link.bgColor}`}
					>
						<IconsButton image={link.icon} href={link.href} />
					</div>
				))}
			</div>
			<BurgerMenu />
		</div>
	);
};

export default Header;
