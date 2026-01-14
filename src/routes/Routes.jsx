import { Routes, Route, Navigate } from "react-router";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
