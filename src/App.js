import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import AssessmentPage from "./components/AssessmentPage";
import TopicsPage from "./components/TopicsPage";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/assessment" element={<AssessmentPage />} />
        <Route path="/topics" element={<TopicsPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
