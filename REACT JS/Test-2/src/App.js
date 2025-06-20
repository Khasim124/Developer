import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OnForm from "./components/OnForm";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginPage = () => <h2>Login Successful Page</h2>;
const ForgotPasswordPage = () => <h2>Forgot Password Page</h2>;
const FacebookLoginPage = () => <h2>Facebook Login Page</h2>;
const GoogleLoginPage = () => <h2>Google Login Page</h2>;
const TravellingApp = () => <h2>Welcome to Travelling App Page</h2>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/facebook-login" element={<FacebookLoginPage />} />
        <Route path="/google-login" element={<GoogleLoginPage />} />
        <Route path="/travellingapp" element={<TravellingApp />} />
      </Routes>
    </Router>
  );
}

export default App;
