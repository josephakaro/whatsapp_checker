'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
	const [number, setNumber] = useState('');
	const [valid, setValid] = useState(null);
	const [error, setError] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(null);
		setValid(null);

		try {
			const res = await axios.post('/api/validator', { number });
			setResponse(res.data);
		} catch (err) {
			setError(
				err.response?.data?.error ||
					'You Have Excceeded the daily 10 validations, try again tomorrow'
			);
		}
	};

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
			<div className="flex flex-col items-center w-[80vw]">
				{valid && (
					<div className="text-green-400">
						Your Number : {number} is Valid 🎉
					</div>
				)}
				{error && <div className=" text-orange-700">{error} 😁</div>}
			</div>
			<form
				onSubmit={handleSubmit}
				className="my-2 sm:my-4 flex flex-col gap-5 sm:w-[50vw] w-[80vw]"
			>
				<input
					type="text"
					value={number}
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
