import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Phones from "./pages/Phones";
import Oops from "./pages/Oops";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/phones" element={<Phones />} />
				<Route path="*" element={<Oops />} />
			</Routes>
		</div>
	)
}

export default App
