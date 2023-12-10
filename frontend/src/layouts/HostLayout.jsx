import React from 'react'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
const HostLayout = () => {
    return (
			<div>
				<nav>
					<ul
						tabIndex={0}
						className='menu menu-sm mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
					>
						<li>
							<Link to={'/host'}>Dashboard</Link>
						</li>
						<li>
							<Link to={'income'}>Income</Link>
						</li>
						<li>
							<Link to={'reviews'}>Reviews</Link>
						</li>
						<li>
							<Link to={'vans'}>Vans</Link>
						</li>
					</ul>
				</nav>
				<Outlet />
			</div>
		);
}

export default HostLayout