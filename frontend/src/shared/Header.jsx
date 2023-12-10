import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom/dist/umd/react-router-dom.development';

	const Header = () => {
		const [theme, setTheme] = useState(
			localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
		);
		const handleTheme = (e) => {
			if (e.target.checked) {
				setTheme('dark');
			} else {
				setTheme('light');
			}
		};
		useEffect(() => {
			localStorage.setItem('theme', theme);
			const localTheme = localStorage.getItem('theme');
			document.querySelector('html').setAttribute('data-theme', localTheme);
		}, [theme]);
	return (
		<div className='navbar bg-base-100 mx-0 px-0'>
			<div className='container'>
				<div className='flex-1'>
					<Link to='/' className='btn btn-ghost text-xl'>
						<svg
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
							fillRule='evenodd'
							clipRule='evenodd'
							className='fill-current h-5 w-5'
						>
							<path d='M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z'></path>
						</svg>
						VanLife
					</Link>
				</div>
				<div className='flex-none'>
					<ul className='menu bg-base-100 menu-horizontal rounded-box px-1'>
						<li>
							<NavLink to='/host'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-5 w-5'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
									/>
								</svg>
								Host
							</NavLink>
						</li>
						<li>
							<NavLink to='/vans'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-5 w-5'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
									/>
								</svg>
								Vans
							</NavLink>
						</li>
						<li>
							<NavLink to='/about'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-5 w-5'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
									/>
								</svg>
								About
							</NavLink>
						</li>
						<label className='cursor-pointer grid place-items-center ml-8'>
							<input
								id='c'
								type='checkbox'
								className='toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2'
								onChange={handleTheme}
								checked={theme === 'light' ? false : true}
							/>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='row-start-1 col-start-1 stroke-base-100 fill-base-100 w-4 h-4'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<circle cx='12' cy='12' r='5' />
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4'
								/>
							</svg>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='row-start-1 col-start-2 stroke-base-100 fill-base-100 w-4 h-4'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'
								/>
							</svg>
						</label>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
