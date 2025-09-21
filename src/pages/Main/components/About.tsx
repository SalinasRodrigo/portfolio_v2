import { useParams } from "react-router-dom";
import './About.css'
export default function About() {
  const { lang } = useParams<{ lang: string }>();

  return (
    <div className="h-[100dvh] flex">
      <div className="flex flex-col gap-4 flex-2">
        <h2 className=" underline ">{lang === "es" ? "Sobre mi" : "About Me"}</h2>
        <p className="max-w-[65ch]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis euismod tortor. Mauris tristique interdum ex, quis tincidunt massa consectetur sit amet. In porta eros urna, ut efficitur sapien fermentum et. Sed ante purus, venenatis sed lorem vitae, hendrerit laoreet nisi. Etiam elementum scelerisque lectus. Maecenas massa felis, porta rutrum nisl efficitur, facilisis consectetur metus. Suspendisse ornare lectus ac mauris volutpat vehicula. Sed nec ante ligula. Integer lacinia sem nisi, id porttitor arcu aliquet ut. Sed auctor dapibus congue. Nunc sit amet libero eleifend, ornare ex et, condimentum tellus. Nunc augue lectus, dignissim id vehicula a, pharetra laoreet mi. Duis tempor dolor vel sapien tincidunt dapibus. Nulla volutpat hendrerit nisi, eget aliquet metus pellentesque ac. Vivamus at diam molestie, mollis sapien eu, gravida magna. </p>
      </div>
      <div className="w-full flex items-start justify-end flex-1 relative">
        <span className="box"></span>
        <span ></span>
      </div>
    </div>
  );
}