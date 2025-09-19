import { Outlet } from "react-router-dom";
import './layout.css'
import ThemeToggle from "../Toggel";

export function Layout () {
  return(
    <div className="app-layout">
      <ThemeToggle/>
      <main className="w-full h-full">
        <Outlet />
      </main>
    </div>
  )
}