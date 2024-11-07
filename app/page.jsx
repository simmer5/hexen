import NavBar from '@/components/NavBar'

export default function Home() {
	return (
		<main className='font-mono flex min-h-screen flex-col items-center justify-evenly p-8'>
			<NavBar />

			<div className='relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[""] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[""] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]'>
				<div>
					<h1 className='mb-3 text-8xl font-semibold text-center'>HEXEN</h1>
					<h2 className='mb-3 text-2xl font-semibold text-center'>
						skaitmeninis partneris
					</h2>
				</div>
			</div>
		</main>
	)
}
