import React from 'react'

export const metadata = {
	title: 'Apie | HEXEN',
	description:
		'HEXEN Įmonė teikianti virtuvės, biuro baldų, vidaus durų bei pakabinamų lubų montavimo paslaugas Vilniuje',
}

const Apie = () => {
	return (
		<div class='container my-24 mx-auto md:px-6 font-mono'>
			<section className='mb-32'>
				<div className='relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-gradient-to-r from-blue-900 '>
					<h1 className='mx-auto text-center m-8 font-medium text-3xl'>
						Apie mus
					</h1>
				</div>
				<div class='container px-6 md:px-12'>
					<div className='block rounded-lg bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]'>
						<div className='mb-12 grid gap-x-6 '>
							<p className='mb-3 text-xl text-gray-500 md:text-3xl dark:text-gray-400'>
								HEXEN - jūsų patikimas partneris, atsakingas už jūsų baldų, durų
								ar pakabinamų lubų įrengimą.
							</p>
							<p className='text-gray-500 dark:text-gray-400'>
								Siekdami tobulumo ir meistriškumo, aptarnaujame savo vertinamus
								klientus teikdami montavimo paslaugas. Mes suprantame, kad jūsų
								namai ar biuras nėra tik vieta; tai jūsų unikalaus stiliaus ir
								asmenybės išraiška. Štai kodėl mes labai didžiuojamės galėdami
								pasiūlyti aukščiausios klasės paslaugas, kurios paverčia jūsų
								namus namais, o biurą unikalia darbo vieta. Siekdami kokybės ir
								klientų lukesčių pateisinimo, stengiamės užsitarnauti įmonės
								vardą, kuriuo galite pasitikėti. <br />
								<br />
								Mūsų misija paprasta: padaryti mūsų klientų gyvenimą patogesniu
								ir gražesniu. <br />
								<br />
								Tikimės, kad galėsime dirbti su jumis ir įgyvendinti jūsų
								vizijas.
							</p>
						</div>
						<div className='mb-12 grid gap-x-6 md:grid-cols-2 lg:grid-cols-3'>
							<div className='mx-auto mb-12 text-center lg:mb-0'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke-width='2'
									stroke='currentColor'
									className='mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
									/>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
									/>
								</svg>
								<h6 className='font-medium'>Vilnius</h6>
							</div>
							<div className='mx-auto mb-6 text-center md:mb-0'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke-width='2'
									stroke='currentColor'
									className='mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
									/>
								</svg>
								<h6 className='font-medium'>+ 370 601 88882</h6>
							</div>
							<div className='mx-auto text-center'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke-width='2'
									stroke='currentColor'
									className='mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z'
									/>
								</svg>
								<h6 className='font-medium'>hexen.hello@gmail.com</h6>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Apie
