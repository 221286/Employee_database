
import { useEffect, useState } from 'react';
import './App.css';
import Employess from './Components/Employess';
import Header from './Components/Header';
import Singleemployee from './Components/Singleemployee';


function App() {
  const [userlist,setuserlist]=useState([]);
  const [employee,setemployee]=useState(null);
  useEffect(()=>{
      (async function fetching(){
       try{
        const response= await fetch('data.json');
        if(!response.ok){
          throw new Error("failed to fetch the data")
        } else {
          const data= await response.json();
          setuserlist(data);
        } 
       } catch(error){
        console.error("failed to fetch the data",error);
       }

      })();
  },[])
  console.log(employee);
  return (
    <div className="App">
      
      <Header/>
      <div className='Employee-container'>
      <Employess userlist={userlist} setemployee={setemployee} />
      <Singleemployee employee={employee}/>
      </div>
      
      
    </div>
  );
}

export default App;
