import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import Exchanges from "./Components/Pages/Exchanges/Exchanges";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/exchanges" element={<Exchanges />} />
      </Routes>
    </Router>
  );
}

export default App;
