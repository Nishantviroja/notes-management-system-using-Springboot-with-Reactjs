import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
// import { CRUDnote } from './components/CRUDnote';
import { Note } from './pages/Note';
import AddNote from './components/Addnote';


function App() {
  return (
    <>
  
           <Router>
                <Navbar />
                  <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/notes" element={<Note />} />
                    <Route exact path="/addnotes" element={<AddNote />} />
                    {/* <Route exact path="/notedata" element={<CRUDnote />} /> */}
                  </Routes>
                <Footer />  
            </Router>
    </>
  );
}

export default App;

