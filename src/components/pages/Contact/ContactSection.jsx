import React from 'react';
import { ContactUsSection, Dot } from '../../../index';

const ContactSection = () => {
	return (
		<div>
			<div className='flex flex-col gap-10'>
				<div className='flex justify-center items-center gap-3 '>
					<Dot />
					<h1 className='font-ArmOmega text-[28px] text-primaryDarkBlue  max-w-xl-1024:text-[24px] max-w-ss-480:text-xl'>
						Կապ
					</h1>
					<Dot />
				</div>
				<ContactUsSection
					teg={
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3062.9316835318373!2d44.700606!3d39.853364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDUxJzEyLjEiTiA0NMKwNDInMDIuMiJF!5e0!3m2!1sen!2sam!4v1730192407945!5m2!1sen!2sam'
							class='h-full w-full border-0'
							loading='lazy'
						></iframe>
					}
				/>
			</div>
		</div>
	);
};

export default ContactSection;
