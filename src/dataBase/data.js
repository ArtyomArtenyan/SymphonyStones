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
