import Profile from "./components/Profile";
import Summary from "./components/Summary";
import "./stylesheets/css/main.css";

function App() {
  return (
    <div className="container">
      <main>
        <Profile />
        <Summary />
      </main>
    </div>
  );
}

export default App;
