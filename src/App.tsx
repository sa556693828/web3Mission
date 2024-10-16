import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import MissionPage from "./components/MissionPage";
import BasicLayout from "./components/Layout/basicLayout";

const App: React.FC = () => {
  return (
    <Router>
      <BasicLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/learn-more" element={<MissionPage />} />
        </Routes>
      </BasicLayout>
    </Router>
  );
};

export default App;
