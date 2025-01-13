import React from 'react';
import { NavLink } from 'react-router-dom';
import { BurgerMenu, IconsButton } from '../..';
import { MainLogo } from '../../../assets/svgs';
import { nav, socialLinks } from '../../../dataBase/data';

const Header = () => {
	return (
		<div className='flex justify-between items-center px-[240px] pt-6 max-w-2xl-1440:px-[100px] max-w-xl-1024:px-10 max-w-ss-480:py-4 max-w-ss-480:px-5'>
			<div className='relative h-[60px] w-10 max-w-sm-600:w-[30px] max-w-sm-600:h-12'>
				<NavLink to='/'>
					<img src={MainLogo} alt='' />
				</NavLink>
			</div>
			<div className='flex max-w-xl-1024:hidden'>
				<ul className='flex font-DejaVu gap-[64px]'>
					{nav.map((el, i) => (
						<NavLink
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
