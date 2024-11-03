import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Navigation from "./Navigation";
import MobileNav from "./MobileNav";
import CareerCoaching from "./pages/CareerCoaching";
import BusinessCoaching from "./pages/BusinessCoaching";
import LifeCoaching from "./pages/LifeCoaching";
import "./App.css";

import home from "./assets/home.svg";
import statistics from "./assets/statistics.svg";
import briefcase from "./assets/briefcase.svg";
import idea from "./assets/idea.svg";

function App() {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 1000);
		};

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

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
			{isMobile ? <MobileNav routes={routes} /> : <Navigation routes={routes} />}
			<main>
				<Routes>
					{routes.map(({ path, element }) => (
						<Route key={path} path={path} element={element} />
					))}
				</Routes>
			</main>
		</>
	);
}

export default App;
