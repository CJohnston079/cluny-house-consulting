import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./Navigation";
import CareerCoaching from "./pages/CareerCoaching";
import BusinessCoaching from "./pages/BusinessCoaching";
import LifeCoaching from "./pages/LifeCoaching";
import "./App.css";

function App() {
	const routes = [
		{ path: "/", label: "Home", element: <Home /> },
		{ path: "/business-coaching", label: "Business Coaching", element: <BusinessCoaching /> },
		{ path: "/career-coaching", label: "Career Coaching", element: <CareerCoaching /> },
		{ path: "/life-coaching", label: "Life Coaching", element: <LifeCoaching /> },
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
		</>
	);
}

export default App;
