import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'HEXEN',
	description: 'Skaitmeninės paslaugos',
	generator: 'Next.js',
	applicationName: 'HEXEN',
	referrer: 'origin-when-cross-origin',
	keywords: [
		'skaitmenines paslaugos',
		'web puslapiu kurimas',
		'video kurimo paslaugos',
	],
	authors: [{ name: 'MiSt', url: 'https://hexen.lt' }],
	creator: 'MiSt',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				{/* <NavBar /> */}
				{children}
				<Analytics />
			</body>
		</html>
	)
}
