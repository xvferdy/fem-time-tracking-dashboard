import Dashboard from "./components/Dashboard";

import "./stylesheets/css/main.css";

// context provider
import { PeriodProvider } from "./context/Period.context";

function App() {
	return (
		<div className="container">
			<PeriodProvider>
				<Dashboard />
			</PeriodProvider>
		</div>
	);
}

export default App;
