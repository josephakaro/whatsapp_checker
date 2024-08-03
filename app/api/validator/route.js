import axios from 'axios';

export const POST = async (request) => {
	const { number } = await request.json();

	const options = {
		method: 'POST',
		url: process.env.URL,
		headers: {
			'x-rapidapi-key': process.env.KEY,
			'x-rapidapi-host': process.env.HOST,
			'Content-Type': 'application/json',
		},
		data: {
			phone_number: number,
		},
	};

	try {
		if (number.length < 10) {
			return {
				status: 400,
				body: {
					error: 'Number is too short',
				},
			};
		}

		if (number.length > 15) {
			return {
				status: 400,
				body: {
					error: 'Number is too long',
				},
			};
		}

		if (number === '') {
			return {
				status: 400,
				body: {
					error: 'Number is required',
				},
			};
		}

		const valid = await axios.request(options);
		return new Response(JSON.stringify(valid.data), { status: 200 });
	} catch (error) {
		if (error.response.status === 429) {
			return new Response(
				'You have Exceeded the daily 10 validations, try again in tomorrow',
				{ status: 429 }
			);
		} else if (error.response.status === 429) {
			return new Response('invalid number', { status: 400 });
		} else {
			return new Response(JSON.stringify(error.message), { status: 500 });
		}
	}
};
