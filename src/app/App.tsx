import { Link } from "react-router-dom";
import { AppRouter } from "./providers";


function App() {
  return (
    <>
      <div>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
      </div>
      <AppRouter />
    </>
  );
}

export default App;
