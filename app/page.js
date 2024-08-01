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
		<div className="flex flex-col items-center p-5 sm:max-w-full h-[100vh] bg-slate-100">
			<div className="bg-green-100 p-4 rounded-lg mt-5 sm:h-[60vh] flex flex-col items-center align-middle gap-4 shadow-md">
				<h1 className="font-bold text-2xl">
					WhatsApp <span className="text-green-500">Validator</span>
				</h1>
				<p className="text-gray-500">
					Don't know if a number is a WhatsApp number? WhatsApp
					validator is the right tool at your grip to validate
					numbers.
				</p>
				<div className="m-5">
					{status.status ? (
						<p className="text-green-500">
							Number is a WhatsApp number
						</p>
					) : (
						<p className="text-red-500">
							Number is not a WhatsApp number
						</p>
					)}
				</div>
				<div className="mt-5 flex flex-row items-center justify-center gap-5">
					<input
						type="text"
						className="outline-none border-2 border-green-500 rounded-lg p-2 sm:min-w-96"
						placeholder="Enter number"
					/>
					<motion.button
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.8 }}
						transition={{ duration: 0.4 }}
						className="bg-green-500 p-2 rounded-lg text-white w-32"
					>
						Check
					</motion.button>
				</div>
			</div>
		</div>
	);
};

export default Home;
