import React, { useEffect, useRef, useState } from 'react'
import * as Yup from "yup";

const Modal = ({setshowmodal,setuserlist,userlist}) => {
const formReference = useRef(null); 
const [modalerror,setmodalerror]=useState({
    firstName:"",
    lastName:"",
    email:"",
    Number:"",
    Salary:"",
    Address:""
}) 

useEffect(()=>{
function handleoutsideclick (e){
if(formReference.current && !formReference.current.contains(e.target)){
    setshowmodal(false)
}
}
document.addEventListener("mousedown",handleoutsideclick);
return ()=>{
    document.removeEventListener("mousedown",handleoutsideclick)
} 

},[])  
const validateform = Yup.object({
    firstName:Yup.string().required("Firstname is required"),
    lastName:Yup.string().required("Lastname is required"),
    email:Yup.string().email("Not valid Email").required("Email is required"),
    Number:Yup.string
    .matches(/^\d{10}$/,"Not a valid number"),
    Salary:Yup.number().min(650000,"Salary should be greater than 650000"),
    Address:Yup.string().required()
})

  const {firstName,lastName,email,Number,Salary,Address}=modalerror;  

  return (
    <div className='add_employee_container'>
        <form onSubmit={(e)=>{
            e.preventDefault();
            const formData = new FormData(e.target);
            const empData = Object.fromEntries(formData);
            empData.id=userlist.length +11222;
            empData.imageUrl=empData.imageUrl||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgsaRe2zqH_BBicvUorUseeTaE4kxPL2FmOQ&usqp=CAU";
            setuserlist([...userlist,empData]);
            
            formReference.current.reset();
            

        } } ref={formReference}  className='add_employee_container_create'> <h2>Enter User Details</h2>
            <div>
                <div className='modal_input_div'>
            <input type='text' name='firstName' placeholder='Firstname' required/>
            <p className='Modal_error_message'>{firstName}</p>
            </div>
            <div>
            <input type='text' name='lastName' placeholder='Lasttname' required/>
            <span className='Modal_error_message'>{lastName}</span>
            </div>
                
                
            </div>
            <input type='text' name='imageUrl' placeholder='Add imageURL' />
            <input type='email' name='email' placeholder='Email' required/><p className="Modal_error_message">{email}</p>
            <input type='number' name='contactNumber' placeholder='Contact Number' required/><p className="Modal_error_message">{Number}</p>
            <input type='number' name='salary' placeholder='Salary' required/><p className="Modal_error_message">{Salary}</p>
            <input type='text' name='address' placeholder='Address' required/><p className="Modal_error_message">{Address}</p>
            <input type='date' name='dob' placeholder='Date of Birth' className='add_employee_container_create_dob' required/><p className="Modal_error_message">Hi</p>
             <input type='submit' className='add_employee_container_create_submit' onSubmit={()=>{}}/>
        </form>
      
    </div>
  )
}

export default Modal
