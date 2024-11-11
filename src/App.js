import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from "./Components/Navbar";
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

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
  }, 1500);
  }

  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.background = '#070c32';
      showAlert("Dark mode has been enabled.", "success")
    }
    else{
      setMode("light");
      document.body.style.background ='white';
      showAlert("Light mode has been enabled.", "success")
    }
  }
  return (
    <>
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm headline="Enter your text to anlyze below" mode={mode} showAlert={showAlert}/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
