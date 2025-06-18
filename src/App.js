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
import Chatbot from './components/Chatbot';

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
                <Navbar />
                <Alert alert={alert}/>
              <div className='pt-20'>
                <Routes>
                  <Route  path="/" element={<Home />} />
                  <Route  path="/aboutus" element={<Aboutme />} />
                  <Route  path="/skills" element={<Skills />} />
                  <Route  path="/project" element={<Project />} />
                  <Route  path="/contect" element={<Contact showAlert={showAlert}/>} />
                </Routes>
                <Chatbot/>
                <Footer />
              </div>
            </Router>
    </>
  );
}

export default App;
