import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from "./Components/Navbar";
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  //Switch,
  Route,
  //Link,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (Message, type) =>{
    setAlert({
      msg: Message,
      type: type
  })
  setTimeout (() =>{
    setAlert(null)
  }, 2000);
  }

  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.background = '#070c32';
      showAlert("Dark mode has been enabled.", "success")
      // document.title = "Textutils - Dark Mode";
    }
    else{
      setMode("light");
      document.body.style.background ='white';
      showAlert("Light mode has been enabled.", "success")
      // document.title = "Textutils - Light Mode";
    }
  }

  const brownMode = () =>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.background = '#5d5003';
      showAlert("Brown mode has been enabled.", "success")
      // document.title = "Textutils - Brown Mode";
    }
    else{
      setMode("light");
      document.body.style.background ='white';
      showAlert("Light mode has been enabled.", "success")
      // document.title = "Textutils - Light Mode";
    }
  }

  const skyMode = () =>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.background = '#1a89a2';
      showAlert("Skyblue mode has been enabled.", "success")
      // document.title = "Textutils - Skyblue Mode";
    }
    else{
      setMode("light");
      document.body.style.background ='white';
      showAlert("Light mode has been enabled.", "success")
      // document.title = "Textutils - Light Mode";
    }
  }

  return (
    <>
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} brownMode={brownMode} skyMode={skyMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}></Route>      
          <Route exact path="/" element = {<TextForm headline="Enter your text to anlyze below" mode={mode} showAlert={showAlert}/>}></Route>
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
