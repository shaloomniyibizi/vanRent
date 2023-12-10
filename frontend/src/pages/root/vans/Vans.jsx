import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Button,
} from '@material-tailwind/react';
const Vans = () => {
    const [vans, setVans] = useState([]);
	useEffect(() => {
		fetch('http://localhost:3000/vans')
			.then((res) => res.json())
			.then((data) => setVans(data));
	}, []);
    return (
			<div className='container my-12'>
				{vans ? (
					<>
						<h1>vans</h1>
						<div className='md:columns-3 sm:columns-2 mx-auto gap-2'>
							{vans.map((van) => (
								<div key={van.id} className='mb-4'>
									<Card className=''>
										<CardHeader shadow={false} floated={false} color='blue-gray' className='h-52'>
											<img
												src={van.image}
												alt={van.name}
												className='h-full w-full object-cover'
											/>
										</CardHeader>
										<CardBody>
											<div className='mb-2 flex items-center justify-between'>
												<Typography color='blue-gray' className='font-medium'>
													{van.name}
												</Typography>
												<Typography color='blue-gray' className='font-medium'>
													<h4 className='m-0 -mb-2'>
														${van.price}
														<br />
													</h4>
													<span className='prose-gray -mt-4'>/day</span>
												</Typography>
											</div>
											<Typography
												variant='small'
												color='gray'
												className='font-normal opacity-75 '
											>
												<p className='line-clamp-3'>{van.description}</p>
											</Typography>
										</CardBody>
										<CardFooter className='pt-0'>
											<Link to={van.id}>
												<Button
													ripple={false}
													fullWidth={true}
													className='bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100'
												>
													{van.type}
												</Button>
											</Link>
										</CardFooter>
									</Card>
								</div>
							))}
						</div>
					</>
				) : (
					<h2>Loading...</h2>
				)}
			</div>
		);
}
export default Vans