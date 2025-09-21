import About from "./components/About";
import Home from "./components/Home";

export default function MainPage() {
  return (
    <div className="flex flex-col">
      <Home />
      <div className="flex flex-col px-4 md:px-[10%]">
        <About />
      </div>
    </div>
  )
}