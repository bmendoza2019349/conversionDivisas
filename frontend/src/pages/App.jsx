import { BrowserRouter as Router } from "react-router-dom"
import Navbar from "../components/navbar/Navbar.jsx"
import Convertidor from "../components/convertidor/Convertidor.jsx"
import Footer from "../components/footer/Footer.jsx"

function App() {
  return (
    <Router>
      <main>
        <Navbar/>
        <Convertidor/>
        <Footer/>
      </main>
    </Router>
  )
}

export default App
