import "./globals.css";
import Head from 'next/head'

import Sidebar from "./component/sidebar"
import { personalData } from "../data/page-data"
import next from "next/types";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head>
				<Head>
					<title>My Portfolio</title>
					<meta name='description' content='My Portfolio' />
				</Head>
			</head>

			<body className='flex flex-col sm:flex-row'>
				<Sidebar data={personalData} />
				<main className='grow-full p-8 sm:p-16 w-full sm:basis-2/3  ml-auto'>
					{children}
				</main>
			</body>
		</html>
	);
}
