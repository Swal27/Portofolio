import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/sidebar";
import About from "./components/pages/about";

function App() {

  return (
    <>
      <Router>
        {/* Fullscreen Flex Container */}
        <div className="h-screen flex items-center justify-center">
          {/* Content Wrapper */}
          <div className="flex w-[80%] max-w-6xl">
            {/* Sidebar */}
            <Sidebar />
            {/* Main Content */}
            <div className="flex-1 p-6 bg-white">
              <Routes>
                <Route path="/" element={<About />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
