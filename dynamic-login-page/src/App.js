import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./loginPage";
import Dashboard from "./Dashboard"; // Import the Dashboard component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
