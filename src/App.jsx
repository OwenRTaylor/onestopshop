import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Docs from "./pages/Docs/Docs";
import Home from "./pages/Home/Home";
import SandpackTopic from "./topics/Sandpack/SandpackTopic";
function App() {
	return (
		<div className="App">
			<nav>
				<Link className="nav-link" to="/">
					Home
				</Link>
				<Link className="nav-link" to="/about">
					About
				</Link>
				<Link className="nav-link" to="/contact">
					Contact
				</Link>
				<Link className="nav-link" to="/docs">
					Docs
				</Link>
			</nav>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/docs" element={<Docs />} />
				<Route path="/sandpack" element={<SandpackTopic />} />
			</Routes>
		</div>
	);
}

export default App;
