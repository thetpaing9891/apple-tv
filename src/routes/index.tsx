import Home from "@/pages";
import Detail from "@/pages/detail";
import { Routes, Route, Navigate } from "react-router-dom";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="*" element={<Navigate to="" replace />} />
      </Route>
      <Route path="/detail" element={<Detail />}>
        <Route path="*" element={<Navigate to="/detail" replace />} />
      </Route>
    </Routes>
  );
}
