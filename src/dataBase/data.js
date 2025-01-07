///Header Info///
export const nav = [
	{
		name: 'Գլխավոր',
		url: '',
	},
	{
		name: 'Արտադրանք',
		url: 'products',
	},
	{
		name: 'Մեր մասին',
		url: 'about',
	},
	{
		name: 'Կապ',
		url: 'contact',
	},
];
export const socialLinks = [
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

/// Home page info and imports ///
import Hero_Section_bottom_image from '../assets/images/homePage/bottom-image.png';
import project1 from '../assets/images/homePage/Image Container-1.jpeg';
import project10 from '../assets/images/homePage/Image Container-10.jpeg';
import project11 from '../assets/images/homePage/Image Container-11.jpeg';
import project12 from '../assets/images/homePage/Image Container-12.jpeg';
import project2 from '../assets/images/homePage/Image Container-2.jpeg';
import project3 from '../assets/images/homePage/Image Container-3.jpeg';
import project4 from '../assets/images/homePage/Image Container-4.jpeg';
import project5 from '../assets/images/homePage/Image Container-5.jpeg';
import project6 from '../assets/images/homePage/Image Container-6.jpeg';
import project7 from '../assets/images/homePage/Image Container-7.jpeg';
import project8 from '../assets/images/homePage/Image Container-8.jpeg';
import project9 from '../assets/images/homePage/Image Container-9.jpeg';
import Hero_Section_Img from '../assets/images/homePage/main-image.png';
import faceBookIcon from '../assets/svgs/icons/facebook-icon.svg';
import gpsIcon from '../assets/svgs/icons/gps.svg';
import instagramIcon from '../assets/svgs/icons/instagram-icon.svg';
import phoneIcon from '../assets/svgs/icons/phone-icon.svg';
import icon1 from '../assets/svgs/icons/property-icon1.svg';
import icon2 from '../assets/svgs/icons/property-icon2.svg';
import icon3 from '../assets/svgs/icons/property-icon3.svg';
import icon4 from '../assets/svgs/icons/property-icon4.svg';
import icon5 from '../assets/svgs/icons/property-icon5.svg';
import icon6 from '../assets/svgs/icons/property-icon6.svg';
///AboutUs page imports///
import About_image from '../assets/images/aboutUsPage/about-image.png';

export let Hero_Section = {
	title1: 'Symphony',
	title2: ' Stone',
	description:
		'Գեղեցիկ բակ ունենալու համար պետք է ընտրել որակյալ արտադրանք։ Symphony Stone-ը առաջարկում է բարձրորակ բետոնե սալիկների լայն տեսականի անմիջապես արտադրողից։ Պատվերների համար կարող եք զանգահարել։',
	img: Hero_Section_Img,
	buttonText: 'Զանգահարել',
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
export const Why_Symphony_Stone_Section_title =
	'Ինչո՞ւ ընտրել Symphony Stone-ի սալիկները';

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
	img: Hero_Section_bottom_image,
	description:
		'Պատվերների և հարցերի համար գրեք մեր Ֆեյսբուքյան կամ ինստագրամյան էջերին կամ զանգահարեք:',

	socialLinks: [
		{
			id: 1,
			icon: phoneIcon,
			link: 'tel:+37493220380',
			text: '+374 93220380',
		},
		{
			id: 2,
			icon: gpsIcon,
			link: 'https://goo.gl/maps/xyz',
			text: 'Ք.Արարատ, Ս.Աղբյուր փ.12/1',
		},
		{
			id: 3,
			icon: faceBookIcon,
			link: 'https://www.facebook.com/SymphonyStone',
			text: 'Symphony Stone',
		},
		{
			id: 4,
			icon: instagramIcon,
			link: 'https://www.instagram.com/symphony.stone',
			text: 'Symphony Stone',
		},
	],
};

///AboutUs page info///

export const About_Us_Hero_Section = {
	pageName: 'Մեր մասին',
	title: 'Symphony Stone',
	description:
		'Symphony Stone ընկերությունը հիմնադրվել է 2023թ-ին Հայաստանի Հանրապետության Արարատի մարզի Արարատ քաղաքում: Ընկերությունը կարողանում է առաջարկել ոլորտում մրցունակ և նմանը չունեցող ցածր գներ: Բազմաթիվ կազմակերպությունների, հիմնարկների ու հաստատությունների համար մեր ընկերությունն իրականացնում է մայթերի սալիկների արտադրության, դրանց տեղադրման ծառայությունների մատուցման աշխատանքներ, որն էլ իր հերթին հնարավորություն է տալիս մեր մասնագետներին ազատ մրցակցել քարերի արտադրության շուկայում՝ պահպանելով արտադրության ծավալի աճի բարձր ցուցանիշները: Մեր ընկերությունը պատրաստ է ծառայություններ մատուցել Հայաստանի Հանրապետության ամբողջ տարածքում: Անկախ նրանից, որ մեր գրասենյակը գտնվում է Արարատի մարզի Արարատ քաղաքում, մենք ունենք համապատասխան գործիքներ, մեքենաներ և ամենակարևորը մասնագետների խումբ, ովքեր արագ և որակով կսպասարկեն ամենապահանջկոտ հաճախորդին: Մեր հաճախորդներից շատերը դառնում են մշտական գործընկերներ և խորհուրդ են տալիս իրենց ծանոթներին, ընկերներին, գործընկերներին և հարազատներին դիմել մեզ, իսկ մեզ ընտրում են բարի համբավի, որակի ապահովման և պատրաստի արտադրության երկարակեցության համար։ Մանրամասներին, ինչպես նաև գներին կարող եք ծանոթանալ՝ զանգահարելով կամ մոտենալով մեր գրասենյակ:',
	image: About_image,
};

///Products page info///
import products_image_1 from '../assets/images/productsPage/image-1.jpeg';
import products_image_10 from '../assets/images/productsPage/image-10.jpeg';
import products_image_11 from '../assets/images/productsPage/image-11.jpeg';
import products_image_12 from '../assets/images/productsPage/image-12.jpeg';
import products_image_13 from '../assets/images/productsPage/image-13.jpeg';
import products_image_14 from '../assets/images/productsPage/image-14.jpeg';
import products_image_15 from '../assets/images/productsPage/image-15.jpeg';
import products_image_16 from '../assets/images/productsPage/image-16.jpeg';
import products_image_17 from '../assets/images/productsPage/image-17.jpeg';
import products_image_18 from '../assets/images/productsPage/image-18.jpeg';
import products_image_19 from '../assets/images/productsPage/image-19.jpeg';
import products_image_2 from '../assets/images/productsPage/image-2.jpeg';
import products_image_20 from '../assets/images/productsPage/image-20.jpeg';
import products_image_21 from '../assets/images/productsPage/image-21.jpeg';
import products_image_22 from '../assets/images/productsPage/image-22.jpeg';
import products_image_23 from '../assets/images/productsPage/image-23.jpeg';
import products_image_24 from '../assets/images/productsPage/image-24.jpeg';
import products_image_25 from '../assets/images/productsPage/image-25.jpeg';
import products_image_26 from '../assets/images/productsPage/image-26.jpeg';
import products_image_27 from '../assets/images/productsPage/image-27.jpeg';
import products_image_28 from '../assets/images/productsPage/image-28.jpeg';
import products_image_29 from '../assets/images/productsPage/image-29.jpeg';
import products_image_3 from '../assets/images/productsPage/image-3.jpeg';
import products_image_30 from '../assets/images/productsPage/image-30.jpeg';
import products_image_31 from '../assets/images/productsPage/image-31.jpeg';
import products_image_32 from '../assets/images/productsPage/image-32.jpeg';
import products_image_33 from '../assets/images/productsPage/image-33.jpeg';
import products_image_34 from '../assets/images/productsPage/image-34.jpeg';
import products_image_4 from '../assets/images/productsPage/image-4.jpeg';
import products_image_5 from '../assets/images/productsPage/image-5.jpeg';
import products_image_6 from '../assets/images/productsPage/image-6.jpeg';
import products_image_7 from '../assets/images/productsPage/image-7.jpeg';
import products_image_8 from '../assets/images/productsPage/image-8.jpeg';
import products_image_9 from '../assets/images/productsPage/image-9.jpeg';
import products_image from '../assets/images/productsPage/image.jpeg';

// 	{
// 		id: 1,
// 		name: "Բետոնե սալաքար 'брусчатка бетонная вибропрессованная'",
// 		image: products_image_11,

// 		size: '238x158x60',
// 	},
// 	{
// 		id: 2,
// 		name: "Սալահատակ քառակուսի 'тротуарная плитка вибропрессованный квадрат'",
// 		image: products_image_12,
// 		size: '238x158x60',
// 	},
// 	{
// 		id: 3,
// 		name: "Ալիքային սալահատակ 'тротуарная плитка вибропрессованная волна'",
// 		image: products_image_13,
// 		size: '115x170',
// 	},
// 	{
// 		id: 4,
// 		name: "Բետոնե սալաքար COLORMIX 'брусчатка Калахари'",
// 		image: products_image_14,
// 		size: '115x170',
// 	},
// 	{
// 		id: 5,
// 		name: "Բետոնե սալաքար COLORMIX 'брусчатка Капучино'",
// 		image: products_image_15,
// 		size: '115x170',
// 	},
// 	{
// 		id: 6,
// 		name: "Բետոնե սալաքար COLORMIX 'брусчатка Эспрессо'",
// 		image: products_image_16,
// 		size: '115x170',
// 	},
// 	{
// 		id: 7,
// 		name: "COLOR MIX 'Տուման'",
// 		image: products_image_17,
// 		size: ['238x158x60', '158x158x60', '158x78x60'],
// 	},
// 	{
// 		id: 8,
// 		name: "COLOR MIX 'Վեչեր'",
// 		image: products_image_18,
// 		size: ['238x158x60', '158x158x60', '158x78x60'],
// 	},
// 	{
// 		id: 9,
// 		name: "COLOR MIX 'Կոյոտ'",
// 		image: products_image_19,
// 		size: ['238x158x60', '158x158x60', '158x78x60'],
// 	},
// 	{
// 		id: 10,
// 		name: "COLOR MIX 'Մալվա'",
// 		image: products_image_20,
// 		size: ['238x158x60', '158x158x60', '158x78x60'],
// 	},
// 	{
// 		id: 11,
// 		name: "COLOR MIX 'Վենուսբերգեր'",
// 		image: products_image_21,
// 		size: ['238x158x60', '158x158x60', '158x78x60'],
// 	},
// 	{
// 		id: 12,
// 		name: "COLOR MIX 'Պեսչանիկ'",
// 		image: products_image_22,
// 		size: ['238x158x60', '158x158x60', '158x78x60'],
// 	},
// 	{
// 		id: 13,
// 		name: '«Հին քաղաք Կանյոն»',
// 		image: products_image_23,
// 		size: ['115x170', '115x115', '115x85', '115x55'],
// 	},
// 	{
// 		id: 14,
// 		name: '«Հին քաղաք Սանրայզ»',
// 		image: products_image_24,
// 		size: ['115x170', '115x115', '115x85', '115x55'],
// 	},
// 	{
// 		id: 15,
// 		name: '«Հին քաղաք Գրեյ»',
// 		image: products_image_25,
// 		size: ['115x170', '115x115', '115x85', '115x55'],
// 	},
// 	{
// 		id: 16,
// 		name: '«Հին քաղաք Ոսկե»',
// 		image: products_image_26,
// 		size: ['115x170', '115x115', '115x85', '115x55'],
// 	},
// 	{
// 		id: 17,
// 		name: '«Հին քաղաք Մոկկո»',
// 		image: products_image_27,
// 		size: ['115x170', '115x115', '115x85', '115x55'],
// 	},
// 	{
// 		id: 18,
// 		name: '«Հին քաղաք Գավանա»',
// 		image: products_image_28,
// 		size: ['115x170', '115x115', '115x85', '115x55'],
// 	},
// 	{
// 		id: 19,
// 		name: '«Հին քաղաք Բրաուն»',
// 		image: products_image_29,
// 		size: ['115x170', '115x115', '115x85', '115x55'],
// 	},
// 	{
// 		id: 20,
// 		name: '«Հին քաղաք Դեղին»',
// 		image: products_image_30,
// 		size: ['115x170', '115x115', '115x85', '115x55'],
// 	},
// 	{
// 		id: 21,
// 		name: '«Հին քաղաք Զակատ»',
// 		image: products_image_31,
// 		size: ['115x170', '115x115', '115x85', '115x55'],
// 	},
// 	{
// 		id: 22,
// 		name: '«Հին քաղաք Սև»',
// 		image: products_image_32,
// 		size: ['115x170', '115x115', '115x85', '115x55'],
// 	},
// 	{
// 		id: 23,
// 		name: '«Հին քաղաք Մոխրագույն Կվարց»',
// 		image: products_image_33,
// 		size: ['115x170', '115x115', '115x85', '115x55'],
// 	},
// ];
export const products = [
	{
		id: 1,
		name: "Բետոնե սալաքար 'брусчатка бетонная вибропрессованная'",
		image: products_image_11,
		size: '200x100x80',
	},
	{
		id: 2,
		name: "Սալահատակ քառակուսի 'тротуарная плитка вибропрессованный квадрат'",
		image: products_image_12,
		size: '20x20x/10x10',
	},
	{
		id: 3,
		name: "Ալիքային սալահատակ 'тротуарная плитка вибропрессованная волна'",
		image: products_image_13,
		size: '238x158x60',
	},
	{
		id: 4,
		name: "Բետոնե սալաքար COLORMIX 'брусчатка Калахари'",
		image: products_image_14,
		size: null,
	},
	{
		id: 5,
		name: "Բետոնե սալաքար COLORMIX 'брусчатка Капучино'",
		image: products_image_15,
		size: null,
	},
	{
		id: 6,
		name: "Բետոնե սալաքար COLORMIX 'брусчатка Эспрессо'",
		image: products_image_16,
		size: null,
	},
	{
		id: 7,
		name: "COLOR MIX 'Տուման'",
		image: products_image_17,
		size: ['238x158x60', '158x158x60', '158x78x60'],
	},
	{
		id: 8,
		name: "COLOR MIX 'Վեչեր'",
		image: products_image_18,
		size: ['238x158x60', '158x158x60', '158x78x60'],
	},
	{
		id: 9,
		name: "COLOR MIX 'Կոյոտ'",
		image: products_image_19,
		size: ['238x158x60', '158x158x60', '158x78x60'],
	},
	{
		id: 10,
		name: "COLOR MIX 'Մալվա'",
		image: products_image_20,
		size: ['238x158x60', '158x158x60', '158x78x60'],
	},
	{
		id: 11,
		name: "COLOR MIX 'Վենուսբերգեր'",
		image: products_image_21,
		size: ['238x158x60', '158x158x60', '158x78x60'],
	},
	{
		id: 12,
		name: "COLOR MIX 'Պեսչանիկ'",
		image: products_image_22,
		size: ['238x158x60', '158x158x60', '158x78x60'],
	},
	{
		id: 13,
		name: '«Հին քաղաք Կանյոն»',
		image: products_image_23,
		size: ['115x170', '115x115', '115x85', '115x55'],
	},
	{
		id: 14,
		name: '«Հին քաղաք Սանրայզ»',
		image: products_image_24,
		size: ['115x170', '115x115', '115x85', '115x55'],
	},
	{
		id: 15,
		name: '«Հին քաղաք Գրեյ»',
		image: products_image_25,
		size: ['115x170', '115x115', '115x85', '115x55'],
	},
	{
		id: 16,
		name: '«Հին քաղաք Ոսկե»',
		image: products_image_26,
		size: ['115x170', '115x115', '115x85', '115x55'],
	},
	{
		id: 17,
		name: '«Հին քաղաք Մոկկո»',
		image: products_image_27,
		size: ['115x170', '115x115', '115x85', '115x55'],
	},
	{
		id: 18,
		name: '«Հին քաղաք Գավանա»',
		image: products_image_28,
		size: ['115x170', '115x115', '115x85', '115x55'],
	},
	{
		id: 19,
		name: '«Հին քաղաք Բրաուն»',
		image: products_image_29,
		size: ['115x170', '115x115', '115x85', '115x55'],
	},
	{
		id: 20,
		name: '«Հին քաղաք Դեղին»',
		image: products_image_30,
		size: ['115x170', '115x115', '115x85', '115x55'],
	},
	{
		id: 21,
		name: '«Հին քաղաք Զակատ»',
		image: products_image_31,
		size: ['115x170', '115x115', '115x85', '115x55'],
	},
	{
		id: 22,
		name: '«Հին քաղաք Սև»',
		image: products_image_32,
		size: ['115x170', '115x115', '115x85', '115x55'],
	},
	{
		id: 23,
		name: '«Հին քաղաք Մոխրագույն Կվարց»',
		image: products_image_33,
		size: ['115x170', '115x115', '115x85', '115x55'],
	},
	{
		id: 24,
		name: '«Հին քաղաք Չինական գրանիտ»',
		image: products_image_34,
		size: ['115x170', '115x115', '115x85', '115x55'],
	},
	{
		id: 25,
		name: "2-ճեղքավոր խոռոչանի բլոկ 'Шлакоблок пустотелый 2-х щелевой'",
		image: products_image,
		size: '400x200x100',
	},
	{
		id: 26,
		name: "3-ճեղքավոր խոռոչանի բլոկ 'Шлакоблок пустотелый 3-х щелевой'",
		image: products_image_1,
		size: '400x200x200',
	},
	{
		id: 27,
		name: 'Բետոնե լիակազմ բլոկ',
		image: products_image_2,
		size: '200x200x400',
	},
	{
		id: 28,
		name: "4-ճեղքավոր խոռոչով բլոկ 'Шлакоблок пустотелый 4-х щелевой'",
		image: products_image_3,
		size: '400x200x200',
	},
	{
		id: 29,
		name: "2-ճեղքավոր խոռոչանի գունավոր բլոկ 'Цветной стендовой блок'",
		image: products_image_4,
		size: null,
	},
	{
		id: 30,
		name: "2-ճեղքավոր խոռոչանի գունավոր բլոկ 'Цветной стендовой блок''",
		image: products_image_5,
		size: null,
	},
	{
		id: 31,
		name: "2-ճեղքավոր խոռոչանի գունավոր բլոկ 'Цветной стендовой блок''",
		image: products_image_6,
		size: '1000x300x150	',
	},
	{
		id: 32,
		name: "Եզրաքար 'Дорожный бордюр'",
		image: products_image_7,
		size: '1000x300x150',
	},
	{
		id: 33,
		name: "Եզրաքար 'Дорожный бордюр'",
		image: products_image_8,
		size: '1000x300x150',
	},
	{
		id: 34,
		name: " Եզրաքար 'Бордюр садовый вибропрессованный'",
		image: products_image_9,
		size: '1000x300x80',
	},
	{
		id: 35,
		name: "Եզրաքար 'Бордюр садовый вибропрессованный'",
		image: products_image_10,
		size: '1000x200x80',
	},
];
