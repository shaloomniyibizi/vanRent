import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../shared'; 
const RootLayout = () => {
	return (
		<div>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default RootLayout;
