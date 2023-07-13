import React,{useState} from 'react';
// import { Routes, Route } from "react-router-dom"
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/about';
import Textform from './components/textform';
import Alert from './components/Alert';

function App() {
  const[mode,setmode] = useState("light");
  if (mode==="dark")
  {
  document.body.style.backgroundColor = "#01192C";
  }
  else{
    document.body.style.backgroundColor = "white";

  }
  const[alert,setAlert] = useState(null);
  
  const showAlert =(message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const togglemode =()=>{
    if(mode === "light"){
      setmode("dark");
      document.body.style.backgroundColor = "#01192C";
      showAlert("dark mode has been enabled","success");
      document.title = "Text Utils - dark mode";
      return true;
    }
    else{
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled","success");
      document.title = "Text Utils - light mode";
      return false;
    }
  }
  // setTimeout(() => {
  //   togglemode();
  // },100);
  
  return (
  <>
    <Navbar title="Textutils" about="about textutils" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert} />
    <div className="container my-3">
    <Textform heading = "Enter the text to analyze" mode={mode} showAlert={showAlert}/>
    </div> 
  </>
  );
}
export default App;
