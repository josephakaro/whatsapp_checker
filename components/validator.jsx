'use client';

function ValidatorCard() {
	return (
		<div className="flex flex-col items-center justify-center h-full">
			<div className="bg-slate-300 sm:w-[600px] w-full p-3 flex flex-col items-center gap-4 rounded-lg">
				<h1 className="text-2xl font-satoshi font-bold">
					WhatsApp <span>Validator</span>
				</h1>
				<p>
					Enter the number below to check if it's a valid WhatsApp
					number or not
				</p>
				<input
					type="text"
					placeholder="Enter number"
					className="p-2 w-full mt-2 rounded-full"
				/>
				<button className="btn bg-gradient-to-r border-none text-white from-green-600 to-green-800 w-full">
					Check
				</button>
			</div>
		</div>
	);
}

export default ValidatorCard;
