export default function Home() {
	return (
		<main className=' font-mono flex min-h-screen flex-col items-center justify-evenly p-8'>
			<div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
				<div>
					<h1 className={`mb-3 text-8xl font-semibold text-center`}>HEXEN</h1>
					<h2 className={`mb-3 text-2xl font-semibold text-center`}>
						Montavimas{' '}
					</h2>
				</div>
			</div>

			<div className='mb-22 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left justify-items-center'>
				<a
					href='#'
					className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
					rel='noopener noreferrer'
				>
					<h2 className={`mb-3 text-1xl font-semibold`}>
						Virtuviniai baldai{' '}
						<span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
							-&gt;
						</span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						Virtuvinių baldų montavimas.
					</p>
				</a>

				<a
					href='#'
					className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30'
					rel='noopener noreferrer'
				>
					<h2 className={`mb-3 text-1xl font-semibold`}>
						Biuro baldai{' '}
						<span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
							-&gt;
						</span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						Biuro baldų montavimas
					</p>
				</a>

				<a
					href='#'
					className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
					rel='noopener noreferrer'
				>
					<h2 className={`mb-3 text-1xl font-semibold`}>
						Korpusiniai baldai{' '}
						<span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
							-&gt;
						</span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						Korpusinių baldų montavimas
					</p>
				</a>
			</div>
			<div className='mb-22 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left justify-items-center'>
				<a
					href='#'
					className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
					rel='noopener noreferrer'
				>
					<h2 className={`mb-3 text-1xl font-semibold`}>
						Lubos{' '}
						<span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
							-&gt;
						</span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						Pakabinamų lubų montavimas
					</p>
				</a>
				<a
					href='#'
					className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
					rel='noopener noreferrer'
				>
					<h2 className={`mb-3 text-1xl font-semibold`}>
						Vidaus durys{' '}
						<span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
							-&gt;
						</span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						Vidaus durų montavimas
					</p>
				</a>
			</div>
		</main>
	)
}
