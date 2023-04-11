import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Forgot from "./components/auth/forgot";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Homepages/Home";
import "./style.css";
import Dashbord from "./components/Dashbord/Dashbord";
import Contact from "./components/Homepages/Contact";
import ResetPass from "./components/auth/ResetPass";
import Profile from "./components/Dashbord/Profile";
import ComposeBox from "./components/Dashbord/ComposeBox";
import CreateContactLIst from "./components/Dashbord/CreateContactLIst";
import React from "react";
import Smtpconfig from "./components/Dashbord/Smtpconfig";
function App() {
  const item = localStorage.getItem("cookieFallback");
  console.log(item);
  function isLogin() {
    if (item) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/reset-password" element={<ResetPass />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/list" element={<CreateContactLIst />} />
          <Route path="/dashboard" element={<Dashbord />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path="/compose" element={<ComposeBox />} />
          <Route path="/smtp" element={<Smtpconfig />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
