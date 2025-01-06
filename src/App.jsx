import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AboutUs, Contact, Footer, Header, Home } from './index.js';
const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<AboutUs />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
