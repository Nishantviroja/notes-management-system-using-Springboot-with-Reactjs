import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Note } from './pages/Note';
import AddNote from './components/Addnote';
import EditNote from './components/Editnote';
import ViewNote from './components/Viewnote';


function App() {
  return (
    <>
  
           <Router>
                <Navbar />
                  <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/notes" element={<Note />} />
                    <Route exact path="/addnotes" element={<AddNote />} />
                    <Route exact path="/editnotes/:id" element={<EditNote />} />
                    <Route exact path="/viewnotes/:id" element={<ViewNote />} />
                    
                  </Routes>
                <Footer />  
            </Router>
    </>
  );
}

export default App;

