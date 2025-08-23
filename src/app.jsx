import logo from "/logo.svg";
import reactLogo from "/react.svg";
import "./styles/app.css";

export function App() {
  return (
    <div className="app">
      <div className="title-area">
        <img src={logo} alt="Bun Logo" className="logo bun-logo" />
        <img src={reactLogo} alt="React Logo" className="logo react-logo" />
      </div>

      <h1>Bun + React</h1>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
  );
}

export default App;
