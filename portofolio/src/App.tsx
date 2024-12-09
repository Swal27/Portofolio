import { useState } from 'react'
import './App.css'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar (untuk tampilan desktop) */}
      <div
        className={`${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed inset-0 bg-gray-800 bg-opacity-75 lg:relative lg:translate-x-0 transition-all ease-in-out duration-300 z-50 lg:w-64 w-64`}
      >
        <div className="text-white text-center">
          <h2 className="text-xl font-semibold">Sidebar</h2>
          <ul className="mt-5">
            <li className="py-2 hover:bg-gray-700 rounded">
              <a href="#">Home</a>
            </li>
            <li className="py-2 hover:bg-gray-700 rounded">
              <a href="#">About</a>
            </li>
            <li className="py-2 hover:bg-gray-700 rounded">
              <a href="#">Services</a>
            </li>
            <li className="py-2 hover:bg-gray-700 rounded">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Hamburger Button (untuk mobile) */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden p-4 text-white bg-gray-800 rounded"
      >
        <span className="block w-6 h-0.5 bg-white mb-2"></span>
        <span className="block w-6 h-0.5 bg-white mb-2"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>

      {/* Main content */}
      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-bold">Main Content</h1>
        <p>This is the main content area.</p>
      </div>

      {/* Tabbar untuk tampilan mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-gray-800 text-white flex justify-around items-center p-4">
        <a href="#" className="flex flex-col items-center">
          <span className="text-xl">🏠</span>
          <span className="text-sm">Home</span>
        </a>
        <a href="#" className="flex flex-col items-center">
          <span className="text-xl">ℹ️</span>
          <span className="text-sm">About</span>
        </a>
        <a href="#" className="flex flex-col items-center">
          <span className="text-xl">🔧</span>
          <span className="text-sm">Services</span>
        </a>
        <a href="#" className="flex flex-col items-center">
          <span className="text-xl">📞</span>
          <span className="text-sm">Contact</span>
        </a>
      </div>
    </div>
  )
}

export default App
