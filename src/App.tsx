import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import MissionPage from "./components/MissionPage";
import BasicLayout from "./components/Layout/BasicLayout";

const App: React.FC = () => {
  return (
    <Router>
      <BasicLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mission" element={<MissionPage />} />
        </Routes>
      </BasicLayout>
    </Router>
  );
};

export default App;
