import "./App.css";
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import Logement from "./components/Logement/Logement"
import About from "./components/About/About"
import NotFound from "./components/Error/NotFound"
import Navbar from './components/Navbar/Navbar'
import Footer from "./components/Footer/Footer"

function App() {

  // Sur la route logement, il faudra peut-être inclure un /:id (/logement/:id) pour que chaque logement ait sa propre page --- Ou génération avec le JSON ?

  return (
    <div className="App">
      <div className="content-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/logement/*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
