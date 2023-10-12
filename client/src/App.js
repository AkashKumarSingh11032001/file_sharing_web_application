import logo from "./logo.svg";
import "./App.css";

function App() {
  const logo =
    "https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg";
  return (
    <div className="container">
      <img src={logo} alt="banner" />
      <div className="wrapper">
        <h1>Simple file sharing!</h1>
        <p>Upload and share the download link.</p>

        <button>Upload</button>
      </div>
    </div>
  );
}

export default App;
