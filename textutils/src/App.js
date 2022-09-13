import React, { useState } from 'react';
import './App.css';
import Navbar from './componets/Navbar';
import Textform from './componets/Textform';
import About from './componets/About';
import Alert from './componets/Alert';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
  } from "react-router-dom";

function App() {
    const[ mode,setMode] = useState('dark');
    const[alert,setAlert]=useState(null);
    const showAlert =(message,type)=>{
        setAlert({
            msg:message,
            type:type

        })
        setTimeout(() => {
            setAlert(null);
        }, 3000);
    }
    
const toggleMode=()=>{
    if (mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor ='blue';
    showAlert("Dark mode has been enabled" ,"success");
    document.title='textutils-Dark mode';
    }
 
    else{
 setMode('light');
 document.body.style.backgroundColor ='white';
 showAlert("light mode has been enabled" ,"success");
 document.title='textutils-Light mode';
 }
}
    return ( 
    <>
            <Router>
            <Navbar title = " Shri Krishna jewellers" mode={mode}toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className = "container" />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          
          <Route path="/">
          <Textform showAlert={showAlert}heading = "Comment Box"/>
            </Route>
        </Switch>
        </Router>
        
            
    
        </>

    );
}
export default App;