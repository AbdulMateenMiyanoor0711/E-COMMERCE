import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./components/Login";
import Registeration from "./components/Registeration";
import Selleronboard from "./components/Selleronboard";
import Adminpanel from "./components/Adminpanel";
import Customersverfication from "./components/Customersverfication";
import Sellersverfication from "./components/Sellersverfication";
const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registeration />} />
            <Route path="/selleronboard" element={<Selleronboard />} />
            <Route path="/admin" element={<Adminpanel />} />
            <Route path="/customer/verification" element={<Customersverfication />} />
            <Route path="/seller/verification" element={<Sellersverfication />} />
          </Routes>
          <nav>
            <Link to="/login">login</Link>
            <Link to="/register">Register</Link>
            <Link to="/selleronboard">Seller Onboard</Link>
            <Link to="/admin">Admin Panel</Link>
            <Link to="/customer/verification">Customer Verification</Link>
            <Link to="/seller/verification">Seller Verification</Link>
          </nav>
        </BrowserRouter>
        <ToastContainer limit={1} />
      </div>
    </>
  );
};

export default App;
