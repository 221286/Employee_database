import React, { useEffect, useRef } from 'react'

const Modal = ({setshowmodal}) => {
const formReference = useRef(null);  

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

    

  return (
    <div className='add_employee_container'>
        <form onSubmit={(e)=>{
            e.preventDefault();
            const formData = new FormData(e.target);
            const empData = Object.fromEntries(formData);
            console.log(empData);
            

        } } ref={formReference}  className='add_employee_container_create'> <h2>Enter User Details</h2>
            <div>
                <input type='text' name='firstName' placeholder='Firstname' required/>
                <input type='text' name='lastName' placeholder='Lasttname' required/>
            </div>
            <input type='text' name='imageUrl' placeholder='Add imageURL' required/>
            <input type='email' name='email' placeholder='Email' required/>
            <input type='number' name='contactNumber' placeholder='Contact Number' required/>
            <input type='number' name='salary' placeholder='Salary' required/>
            <input type='text' name='address' placeholder='Address' required/>
            <input type='date' name='dob' placeholder='Date of Birth' className='add_employee_container_create_dob' required/>
             <input type='submit' className='add_employee_container_create_submit' onSubmit={()=>{}}/>
        </form>
      
    </div>
  )
}

export default Modal
