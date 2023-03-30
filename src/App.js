import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Forgot from "./components/auth/forgot";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./components/landing/Index";
import OtpFill from "./components/auth/OtpFill";
import Home from "./components/Dashbord/Home";
import "./style.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/fillotp" element={<OtpFill />} />
          <Route path="/Dashborad/Home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
