import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'HEXEN montavimas',
	description:
		'Virtuvės, biuro baldų. vidaus durų bei pakabinamų lubų montavimas Vilniuje. Susisiekite: tel. +370 601 88882, el. paštas hexen.hello@gmail.com',
	generator: 'Next.js',
	applicationName: 'HEXEN',
	referrer: 'origin-when-cross-origin',
	keywords: [
		'baldu montavimas',
		'biuro baldu montavimas',
		'virtuviniu baldu montavimas',
		'pakabinamu lubu montavimas',
		'vidaus duru montavimas',
	],
	authors: [{ name: 'Mindaugas', url: 'https://hexen.lt' }],
	creator: 'Mindaugas',
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
				<NavBar />
				{children}
				<Analytics />
			</body>
		</html>
	)
}
