import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Aboutme from './components/Aboutme';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (messege ,type) => {
    setAlert({
      msg: messege,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  return (
    <>
    <Router>
              <div>
                <Navbar />
                <Alert alert={alert}/>
                <Routes>
                  <Route  path="/" element={<Home />} />
                  <Route  path="/aboutme" element={<Aboutme />} />
                  <Route  path="/skills" element={<Skills />} />
                  <Route  path="/project" element={<Project />} />
                  <Route  path="/contect" element={<Contact showAlert={showAlert}/>} />
                </Routes>
                <Footer />
              </div>
            </Router>
    </>
  );
}

export default App;
