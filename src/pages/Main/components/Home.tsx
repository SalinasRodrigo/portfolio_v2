import { useParams } from "react-router-dom";
import './Home.css'
export default function Home() {
  const { lang } = useParams<{ lang: string }>();


  return (
    <div className="h-[100dvh] flex justify-start">
      <img src={"/images/cover_l.webp"} alt={lang==="es" ? "Imagen de portada" : "Cover image"} className="fullscreen-img block dark:hidden"/>
      <img src={"/images/cover_d.webp"} alt={lang==="es" ? "Imagen de portada" : "Cover image"} className="fullscreen-img hidden dark:block opacity-90"/>
      <div className="w-full h-fit mt-56 flex flex-col pl-20 py-5">
        <h1 className="max-w-[18ch]">Rodrigo Salinas Desarrollador <span className="text-[#f56646] dark:text-[#d7839f]">Full-Stack</span></h1>
        <h5 className="">¡Trabajemos juntos!</h5>
      </div>
    </div>
  );
}