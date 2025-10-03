// import { useParams } from "react-router-dom";
import './About.css'
export default function About() {
  // const { lang } = useParams<{ lang: string }>();

  return (
    <div className="min-h-[100dvh] flex flex-col mt-20 items-center gap-10">

      <div className="flex justify-center gap-32 items-center w-full pr-40">
        <div className=" flex items-start justify-end relative">
          <div className="box h-80 w-80">
            <img src={"/images/foto.jpg"} alt="Foto de perfil" />
          </div>
          <span className="h-80 w-80"></span>
        </div>
        <div className="flex flex-col gap-4">
          <p className="max-w-[65ch] text-4xl about-text">Me dedico al desarrollo web, trabajo tanto en backend como en frontend. Me gusta aprender, colaborar y aplicar mis conocimientos para crear proyectos útiles.</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full gap-30 justify-end mt-20">
        <div className="flex flex-col gap-10">
          <div className="flex items-start justify-end relative">
            <div className="box h-80 w-160 bg-amber-200">
            </div>
            <span className="h-80 w-160"></span>
          </div>
          <div className="flex items-start justify-end relative">
            <div className="box h-80 w-160 bg-amber-200">
            </div>
            <span className="h-80 w-160"></span>
          </div>
        </div>
        <div className="flex items-start justify-end relative">
          <div className="box h-80 w-160 md:h-full md:w-80 bg-amber-200">
          </div>
          <span className="h-80 w-160 md:h-full md:w-80"></span>
        </div>
      </div>
    </div>
  );
}