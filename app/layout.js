import './globals.css';
import Nav from '@components/Nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
	title: 'WhatsApp Checker',
	description: 'WhatsApp Checker validates if the number is whatsApp or not',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="flex flex-col items-stretch bg-base-300 justify-start w-screen h-screen">
				<Nav />
				{children}
			</body>
			<Analytics />
			<SpeedInsights />
		</html>
	);
}
