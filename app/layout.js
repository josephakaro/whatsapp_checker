import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '@components/Nav';

const inter = Inter({ subsets: ['latin'] });

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
		</html>
	);
}
