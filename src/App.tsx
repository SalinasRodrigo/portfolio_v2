import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";

import en from "./locales/en.json";
import es from "./locales/es.json";

function Home() {
  const { lang } = useParams<{ lang: "es" | "en" }>();
  const t = lang === "en" ? en : es;
  return <h1>{t.welcome}</h1>;
}

function About() {
  const { lang } = useParams<{ lang: "es" | "en" }>();
  const t = lang === "en" ? en : es;
  return <h1>{t.about}</h1>;
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/es" replace />} />
        <Route path="/:lang/home" element={<Home />} />
        <Route path="/:lang/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
