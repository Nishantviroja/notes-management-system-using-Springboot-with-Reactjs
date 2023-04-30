import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Note } from './pages/Note';


function App() {
  return (
    <>
  
           <Router>
                <Navbar />
                  <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/notes" element={<Note />} />
                  </Routes>
                <Footer />  
            </Router>
    </>
  );
}

export default App;

