import React from 'react'

const NavBar = () => {
	return (
		<nav className='flex m-auto justify-between p-8 md:w-3/4 w-full'>
			<a href='/'>
				<div className='font-mono md:text-5xl text-3xl'>HEXEN</div>
			</a>
			<div className='flex z-10 max-w-5xl md:gap-5 gap-2 items-end justify-between font-mono md:text-3xl text-1xl lg:flex'>
				<a href='/apie'>
					<p>Apie</p>
				</a>
				<a href='/kontaktai'>
					<p>Kontaktai</p>
				</a>
			</div>
		</nav>
	)
}

export default NavBar
