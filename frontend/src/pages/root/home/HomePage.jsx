import { images } from '../../../constants/images'

const HomePage = () => {
	return (
		<div>
			<div
				className='hero min-h-[220px]'
				style={{
					backgroundImage: `url(${images.top})`,
				}}
			>
				<div className='hero-overlay bg-opacity-80'></div>
				<div className='hero-content text-center text-neutral-content'>
					<div className='max-w-md'>
						<h1 className='mb-5 text-5xl font-bold'>
							You got the travel plans, we got the travel vans.
						</h1>
						<p className='mb-5'>
							Add adventure to your life by joining the #vanlife movement. Rent
							the perfect van to make your perfect road trip.
						</p>
						<button className='btn btn-primary'>Find your van</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomePage