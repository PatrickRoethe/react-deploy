import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>I have successfully deployed</h1>

      {/* Bruk riktig komponent for navigasjon i React Router */}
      <Link to="/test">Go to Test Page</Link>

      {/* Standard <a> tag for full sideoppdatering */}
      <a href="/test">Go to test Page (anchor)</a>
    </>
  );
}

export default App;
