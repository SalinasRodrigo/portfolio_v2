import { Outlet } from "react-router-dom";
import './layout.css'
import { CiLinkedin, CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export function Layout() {
  return (
    <div className="">
      <nav>
        <div className=" fixed top-5 left-5 z-0">
          <div className="h-20 w-20 border-2 border-white rounded-full"></div>
        </div>
        <input type="checkbox" name="burguer-inp" id="burguer-inp" className='burguer-inp' hidden />
          <label htmlFor="burguer-inp" className='burguer'>
            <div></div>
            <div></div>
            <div></div>
          </label>
          <div className="left-bar">
            <ul>
              <li><button className="cursor-pointer"><CiLinkedin className="h-10 w-10"/></button></li>
              <li><button className="cursor-pointer"><CiMail className="h-10 w-10" /></button></li>
              <li><button className="cursor-pointer"><FaGithub className="h-10 w-10" /></button></li>
            </ul>
            <span className="Vertical-line"></span>
          </div>
          <div className="right-bar">
            <p className="[writing-mode:vertical-rl] text-xl">salinas.e.rodrigo@gmail.com</p>
            <span className="Vertical-line"></span>
          </div>
      </nav>
      <main className="w-full h-full">
        <Outlet />
      </main>
    </div>
  )
}