import './App.css';
import Navbar from "./Components/Navbar";
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About"/>
      <div className="container my-3">
        <TextForm headline="Enter your text to anlyze below"/>
      </div>
    </>
  );
}

export default App;
