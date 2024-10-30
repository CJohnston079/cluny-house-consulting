import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CareerCoaching from "./pages/CareerCoaching";
import BusinessCoaching from "./pages/BusinessCoaching";
import LifeCoaching from "./pages/LifeCoaching";
import "./App.css";

function App() {
	return (
		<div>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/business-coaching">Business Coaching</Link>
				<Link to="/career-coaching">Career Coaching</Link>
				<Link to="/life-coaching">Life Coaching</Link>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/business-coaching" element={<BusinessCoaching />} />
				<Route path="/career-coaching" element={<CareerCoaching />} />
				<Route path="/life-coaching" element={<LifeCoaching />} />
			</Routes>
		</div>
	);
}

export default App;
