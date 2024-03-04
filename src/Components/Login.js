import React, { useEffect, useRef, useState } from 'react'

const Login = () => {
  const [warning,setwarning]= useState(null);
  const Forminput = useRef(null);
  const nameinput = useRef(null);
  useEffect(()=>{
    if(nameinput){
      nameinput.current.focus();
    }
  })
  const handleform = (Fullname,Password,setwarning,Forminput)=>{
     const nameregex = /^[a-zA-Z ]+$/.test( Fullname);
     // The pasword regex is to test if the given value has 8 characters atleast one number one upper case and atleaset one 
     //lower case and a special character.
     const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(Password);
     if(!nameregex || !password){
       setwarning("Invalid name or password");
     } else{
      Forminput.current.reset();
      
      setwarning(null);
     }
     
  }
  return (
    <div className='Login'>
      
      <form className='Login_form' ref={Forminput} onSubmit={(e)=>{e.preventDefault();
      const Formdata = new FormData(e.target);
      const Logindata = Object.fromEntries(Formdata)
      const {Fullname,Password} =Logindata;
      handleform(Fullname,Password,setwarning,Forminput,nameinput);
      
      }}>
        <div>
        <h3>Login</h3>
        <input type='text' ref={nameinput} name='Fullname' placeholder='Fullname' required/>
        <input type='password' name='Password' placeholder='Password' required/>
        <span>{warning}</span>
        <input type='submit' className='Login-form-submit'/>
        
        </div>
        


      </form>
    </div>
  )
}

export default Login
