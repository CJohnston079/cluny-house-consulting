import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import App from "./App";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<ScrollToTop />
		<App />
	</BrowserRouter>
);
