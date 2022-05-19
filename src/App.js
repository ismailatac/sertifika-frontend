import React, { useState } from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom'
import Dashboard from './Dashboard';
import Login from './Login';
import Navbar from './Navbar';


function App() {
  const [girisyapildi,setGirisYapildi] = useState(true);
  const girisyap = true;
  
  if (!girisyapildi){
    return(
    <Login girisyapildi={girisyapildi} setGirisYapildi={setGirisYapildi} />
    )
    if (girisyapildi){
      girisyap = true;
    }
  }
  console.log(girisyap);
  return (
    <React.Fragment>
    
    {girisyap === true && <Dashboard />}
    

    
    </React.Fragment>
  );
}

export default App;
