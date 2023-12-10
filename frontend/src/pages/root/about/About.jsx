import React from 'react'
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development';
import { images } from '../../../constants/images';
const About = () => {
  return (
    <>
      <img src={images.top2} alt="" className="aspect-4/3 h-64 w-full object-cover" />
    <div className='container'>
			<article className='prose mx-auto leading-normal py-8'>
				<h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
				<p>
					Our mission is to enliven your road trip with the perfect travel van
					rental. Our vans are recertified before each trip to ensure your
					travel plans can go off without a hitch. (Hitch costs extra )
				</p>
				<p>
					Our team is full of vanlife enthusiasts who know firsthand the magic
					of touring the world on 4 wheels.
				</p>
				<div className='hero bg-orange-400 place-items-start p-12 dark:bg-orange-500 rounded-md'>
					<div className=''>
						<h1 className='block'>
							Your destination is waiting.
							<br /> Your van is ready.
						</h1>
						<Link to='/vans' className='btn btn-primary'>Explore our vans</Link>
					</div>
				</div>
			</article>
		</div>
  </>
	);
}

export default About