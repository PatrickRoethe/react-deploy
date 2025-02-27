import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>I have successfully deployed</h1>
      {/* Navigasjon til test og dog-siden */}
      <Link to="/test">Go to Test Page</Link>
      <br />
      <Link to="/dog">Go to Dog Page</Link> {/* 👈 Ny link til Dog */}
    </>
  );
}

export default App;
