import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from "./Components/Navbar";
import TextForm from './Components/TextForm';

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.background = '#070c32';
    }
    else{
      setMode("light");
      document.body.style.background ='white';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm headline="Enter your text to anlyze below" mode={mode}/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
