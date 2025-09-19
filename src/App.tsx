import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/layout/RootLayout";
import MainPage from "./pages/Main/MainPage";



export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* Redirige / hacia /es */}
          <Route path="/" element={<Navigate to="/es" replace />} />

          {/* Rutas con idioma */}
          <Route path="/:lang" element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
