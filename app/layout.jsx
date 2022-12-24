import './globals.css';
import Header from './Header';

export default function RootLayout({ children }) {
	return (
		<html lang='pt-br'>
			{/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body className='bg-black'>
				<Header />
				{children}
				<footer className='text-center text-gray-700 p-7 border-t border-gray-900'>
					Made by Felipe Cardoso©2022
				</footer>
			</body>
		</html>
	);
}
