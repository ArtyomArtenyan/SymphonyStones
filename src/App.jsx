import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer, Header } from './components';
import { AboutUsPage, ContactUsPage, HomePage, ProductsPage } from './pages';

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/products' element={<ProductsPage />} />
				<Route path='/about' element={<AboutUsPage />} />
				<Route path='/contact' element={<ContactUsPage />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
