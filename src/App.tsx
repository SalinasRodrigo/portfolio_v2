import './App.css'
import ThemeToggle from './components/Toggel'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-amber-400">
        Hola Tailwind 🌙
      </h1>
      <ThemeToggle />
    </div>
  );
}