import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "next-themes"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  )
}

export default App

