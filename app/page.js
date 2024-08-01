'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
	const [number, setNumber] = useState('');
	const [status, setStatus] = useState('');

	useEffect(() => {
		const getNumber = () => {
			const res = {
				status: false,
			};
			const data = res;
			setStatus(data);
		};
		getNumber();
	}, []);

	return (
		<div className="h-full">
			<h1>Home</h1>
		</div>
	);
};

export default Home;
