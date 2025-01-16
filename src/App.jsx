import { Routes, Route } from "react-router-dom";
import Navigation from "./nav/Navigation";
import Home from "/src/pages/Home";
import CareerCoaching from "/src/pages/CareerCoaching";
import BusinessCoaching from "/src/pages/BusinessCoaching";
import LifeCoaching from "/src/pages/LifeCoaching";
import Footer from "/src//components/Footer/Footer";

import home from "./assets/home.svg";
import statistics from "./assets/statistics.svg";
import briefcase from "./assets/briefcase.svg";
import idea from "./assets/idea.svg";

function App() {
	const routes = [
		{ path: "/", label: "Home", icon: home, element: <Home /> },
		{
			path: "/business-coaching",
			label: "Business Coaching",
			icon: statistics,
			element: <BusinessCoaching />,
		},
		{
			path: "/career-coaching",
			label: "Career Coaching",
			icon: briefcase,
			element: <CareerCoaching />,
		},
		{ path: "/life-coaching", label: "Life Coaching", icon: idea, element: <LifeCoaching /> },
	];

	return (
		<>
			<Navigation routes={routes} />
			<main>
				<Routes>
					{routes.map(({ path, element }) => (
						<Route key={path} path={path} element={element} />
					))}
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
