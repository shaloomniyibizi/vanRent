
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom/dist/umd/react-router-dom.development"
import { About, Vans, HomePage, VanDetail, Dashboard, Reviews, Income } from './pages';
import RootLayout from './layouts/RootLayout';
import HostLayout from './layouts/HostLayout';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<RootLayout />}>
			<Route index element={<HomePage />} />
			<Route path='about' element={<About />} />
			<Route path='vans' element={<Vans />} />
			<Route path='vans/:id' element={<VanDetail />} />

			<Route path='host' element={<HostLayout />}>
				<Route index element={<Dashboard />} />
				<Route path='reviews' element={<Reviews />} />
				<Route path='income' element={<Income />} />
				<Route path='vans' element={<Vans />} />
			</Route>
		</Route>
	)
);

const App = () => {

  return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App
