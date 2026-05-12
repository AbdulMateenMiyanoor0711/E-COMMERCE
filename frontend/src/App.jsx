import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Registeration from "./components/Registeration";
import Selleronboard from "./components/Selleronboard";
const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registeration />} />
            <Route path="/selleronboard" element={<Selleronboard />} />
          </Routes>
          <nav>
            <Link to="/login">login</Link>
            <Link to="/register">Register</Link>
            <Link to="/selleronboard">Seller Onboard</Link>
          </nav>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
