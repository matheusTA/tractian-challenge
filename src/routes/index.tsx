import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from "../pages/home";
import { NotFoundPage } from "../pages/not-found";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
