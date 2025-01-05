/// Home page info ///
import {
	faceBookIcon,
	gpsIcon,
	Hero_Section_Img,
	icon1,
	icon2,
	icon3,
	icon4,
	icon5,
	icon6,
	instagramIcon,
	phoneIcon,
	project1,
	project10,
	project11,
	project12,
	project2,
	project3,
	project4,
	project5,
	project6,
	project7,
	project8,
	project9,
} from '../index';

export const Hero_Section = {
	title: 'Symphony Stone',
	description:
		'Գեղեցիկ բակ ունենալու համար պետք է ընտրել որակյալ արտադրանք։ Symphony Stone-ը առաջարկում է բարձրորակ բետոնե սալիկների լայն տեսականի անմիջապես արտադրողից։ Պատվերների համար կարող եք զանգահարել։',
	img: Hero_Section_Img,
};
export const our_Work_Section_title = 'Մեր աշխատանքները';
export const our_Work_Section = [
	project1,
	project2,
	project3,
	project4,
	project5,
	project6,
	project7,
	project8,
	project9,
	project10,
	project11,
	project12,
];
export const Why_Symphony_Stone_Section = [
	{
		id: 1,
		icon: icon1,
		description: 'Բացառիկ դիզայն',
	},
	{
		id: 2,
		icon: icon2,
		description: 'Որակյալ հումք',
	},
	{
		id: 3,
		icon: icon3,
		description: 'Նախշերի և գույների բազմազանություն',
	},
	{
		id: 4,
		icon: icon4,
		description: 'Երկարակեցություն',
	},
	{
		id: 5,
		icon: icon5,
		description: 'Երաշխավորված որակ',
	},
	{
		id: 6,
		icon: icon6,
		description: 'Անվճար չափագրում և նախագծում',
	},
];

export const Contact_Us_Section = {
	title: 'Շտապեք ձեռք բերել ամենամատչելի գներով',
	description:
		'Պատվերների և հարցերի համար գրեք մեր Ֆեյսբուքյան կամ ինստագրամյան էջերին կամ զանգահարեք:',
	phone: '+374 93220380',
	address: 'Ք.Արարատ, Ս.Աղբյուր փ.12/1',
	socialLinks: [
		{
			id: 1,
			icon: <IconsButton image={phoneIcon} href='tel:+37493220380' />,
			link: 'tel:+37493220380',
		},
		{
			id: 2,
			icon: <IconsButton image={gpsIcon} href='https://goo.gl/maps/xyz' />,
			link: 'https://goo.gl/maps/xyz',
		},
		{
			id: 3,
			icon: (
				<IconsButton
					image={faceBookIcon}
					href='https://www.facebook.com/SymphonyStone'
				/>
			),
			link: 'https://www.facebook.com/SymphonyStone',
		},
		{
			id: 4,
			icon: (
				<IconsButton
					image={instagramIcon}
					href='https://www.instagram.com/symphony.stone'
				/>
			),
			link: 'https://www.instagram.com/symphony.stone',
		},
	],
};
// // products.js
// export const products = [
//   {
//     id: 1,
//     name: "Тротуарная плитка",
//     description: "Высокое качество и уникальный дизайн.",
//     image: "/assets/images/product1.jpg",
//   },
//   {
//     id: 2,
//     name: "Облицовочные плиты",
//     description: "Идеально для фасадов и интерьеров.",
//     image: "/assets/images/product2.jpg",
//   },
//   {
//     id: 3,
//     name: "Декоративные элементы",
//     description: "Для уникального ландшафтного дизайна.",
//     image: "/assets/images/product3.jpg",
//   },
// ];

// // Social media links
// export const socialLinks = {
//   facebook: "https://facebook.com/symphonystone",
//   instagram: "https://instagram.com/symphonystone",
// };

// // Contact information
// export const contactInfo = {
//   phone: "+374 (91) 123-456",
//   email: "info@symphonystones.am",
//   address: "г. Веди, ул. Примерная 1",
// };

// // About Us info
// export const aboutUs = {
//   title: "О компании Symphony Stone",
//   description:
//     "Мы создаем бетонные изделия с уникальным дизайном для вашего дома и сада. Мы используем высококачественные материалы и современные технологии производства.",
// };
