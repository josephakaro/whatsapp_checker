'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
	const [number, setNumber] = useState('');
	const [status, setStatus] = useState(false);
	useEffect(() => {
		const getNumber = () => {
			const res = {
				status: true,
			};
			const data = res;
			setStatus(data);
		};
		getNumber();
	}, []);

	return (
		<div className="flex flex-col items-center justify-center h-full bg-gradient-to-tl from-slate-200 to-slate-300">
			<div className="my-10 sm:w-[50vw] w-[80vw] flex flex-col gap-4 items-center">
				<h1 className="sm:text-5xl text-5xl font-satoshi font-bold">
					<span className="text-green-600">WhatsApp</span> Checker
				</h1>
				<p className="text-slate-500">
					Kickstart your WhatsApp validation journey with our simple
					and easy-to-use tool that helps you validate WhatsApp
					numbers in real-time.
				</p>
			</div>
			<div className="sm:w-[50vw] w-[80vw] flex flex-col items-center align-center">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 2 }}
				>
					{status === true ? (
						<span className="text-green-600">
							Your number {number} ✅ is a valid whatsApp number
						</span>
					) : (
						<span className="text-red-600">
							Your number {number} ⛔ is a valid whatsApp number
						</span>
					)}
				</motion.h1>
			</div>
			<form className="my-2 sm:my-4 flex flex-col gap-5 sm:w-[50vw] w-[80vw]">
				<input
					type="text"
					onChange={(e) => setNumber(e.target.value)}
					placeholder="Enter number"
					className="p-2 w-full mt-2 rounded-lg"
				/>
				<button
					type="submit"
					className="btn bg-green-700 rounded-lg text-white w-full hover:bg-green-800"
				>
					Check
				</button>
			</form>
		</div>
	);
};

export default Home;
