import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import NotFoundPage from './components/NotFoundPage'; 
import { Routes, Route, BrowserRouter as Router, Outlet } from "react-router-dom";

// ... rest of your App component code ...


function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message, 
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = "#042743";
        showAlert("Dark mode has been enabled", "success");
        // document.title = "TextUtils - Dark Mode"
        // setInterval(()=>{
        //   document.title = "TextUtils - Download Now"
        // }, 2000);
        // setInterval(()=>{
        //   document.title = "TextUtils - Install Mode"
        // }, 1500);
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = "white"
        showAlert("Light mode has been enabled", "success");
        // document.title = "TextUtils - Light Mode"
      }
      
  }
  return (
    <Router>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container"> 
        <Outlet /> {/* Key change: Outlet for dynamic content */} 
      </div>  
      <Routes> {/* Routes definition remains the same */}
        <Route exact path="/about" element={<About mode={mode} />} />
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} />} />
        <Route exact path="*" element={<NotFoundPage />} /> 
      </Routes>    
    </Router>
  );
}



export default App;
