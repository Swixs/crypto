import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import Exchanges from "./Components/Pages/Exchanges/Exchanges";
import Layout from "./Components/Layouts/Layout";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/exchanges" element={<Exchanges />} />
      </Routes>
      <Layout />
    </Router>
  );
}

export default App;
