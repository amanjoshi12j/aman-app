
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode ] = useState(`light`); //whether dark mode enable or not
  const [alert, setAlert]=useState(null)
  const showAlert =(message,type)=>
    {
setAlert(
  {
    msg:message,
    type:type
  }
)
setTimeout(() => {
  setAlert(null);
}, 1500);
    }
  const toggleMode=()=>
    {
      if (mode==='light')
        {
        setMode('dark');
        document.body.style.backgroundColor='#142536';
        showAlert("Dark mode has been enabeled", "success")
    }
   else
   {
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabeled", "success")
   }
      }
  return (
    <>
    {/* <Router> */}
    <Navbar mode ={mode}  toggleMode={toggleMode} about="about" title="amans app"/>
    <Alert alert={alert}/>
   
    < div className="container my-3">
    <TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />
{/*     
      <Routes>
        <Route path="/about" element={<About />} /> */}
        {/* <Route path="/" element={ */}
        
       
        {/* } /> */}
      {/* </Routes> */}
      </div>
    {/* </Router> */}

     
    
</>

  );
}

export default App;
 