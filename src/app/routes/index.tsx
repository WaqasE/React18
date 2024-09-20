// src/routes/index.tsx

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NotFound } from "../pages/";
import { Footer } from "../components/atoms/";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
