import React from 'react';
import { Contact_Us_Section } from '../../../dataBase/data';
import IconsButton from '../IconsButton/IconsButton';

const ContactUsSection = ({ teg }) => {
	return (
		<div>
			<div className='px-[240px] mb-20 flex max-w-2xl-1440:px-[100px] max-w-xl-1024:px-10 max-w-xl-1024:mb10 max-w-ss-480:px-5 max-w-xl-1024:flex-col'>
				<div className=' relative w-full h-[480px] max-w-xl-1024:h-[400px] max-w-ss-480:h-[240px]'>
					{teg}
				</div>
				<div className='bg-white w-[70%] flex flex-col gap-6 px-16 py-10 max-w-xl-1024:w-full max-w-xl-1024:px-10'>
					<div className='flex flex-col gap-4'>
						<h1 className='font-ArmOmega text-[20px] text-primaryDarkBlue max-w-xl-1024:text-2xl'>
							{Contact_Us_Section.title}
						</h1>
						<p className='text-sm'>{Contact_Us_Section.description}</p>
					</div>
					<div className='flex flex-col gap-3'>
						{Contact_Us_Section.socialLinks.map(ele => (
							<div key={ele.id} className='flex items-center gap-3'>
								<div className='flex items-center w-10 h-10 border-none rounded-full justify-center bg-primaryLightBlue'>
									<IconsButton image={ele.icon} href={ele.link} />
								</div>
								<span>{ele.text}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUsSection;
