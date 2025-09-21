import { Outlet } from "react-router-dom";
import './layout.css'
import { CiLinkedin, CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export function Layout() {
  return (
    <div className="">
      <nav>
        <div className=" fixed top-5 left-5 z-20">
          <div className="h-20 w-20 border-2 border-amber-700 rounded-full"></div>
        </div>
        <input type="checkbox" name="burguer-inp" id="burguer-inp" className='burguer-inp' hidden />
          <label htmlFor="burguer-inp" className='burguer'>
            <div></div>
            <div></div>
            <div></div>
          </label>
          <div className=" fixed bottom-0 left-5 z-20 flex flex-col justify-center items-center gap-5">
            <ul >
              <li><button><CiLinkedin className="h-10 w-10"/></button></li>
              <li><button><CiMail className="h-10 w-10" /></button></li>
              <li><button><FaGithub className="h-10 w-10" /></button></li>
            </ul>
            <span className="h-24 w-[1px] bg-black"></span>
          </div>
          <div className="fixed bottom-0 right-5 z-20 flex flex-col justify-center items-center gap-5">
            <p className="[writing-mode:vertical-rl] text-xl">salinas.e.rodrigo@gmail.com</p>
            <span className="h-52 w-[1px] bg-black"></span>
          </div>
      </nav>
      <main className="w-full h-full">
        <Outlet />
      </main>
    </div>
  )
}