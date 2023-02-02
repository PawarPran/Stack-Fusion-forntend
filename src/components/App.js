import React from "react";
import '../styles/App.css';
import Form from "./Form";
import AllForms from "./AllForms";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div id="main">
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Form/>}/>
        <Route  path="/allForms" element={<AllForms/>}/>

      </Routes>
      </BrowserRouter>
      
    </div>
  )
}


export default App;
