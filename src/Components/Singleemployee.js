import React from 'react'

const Singleemployee = ({employee}) => {
    if(employee===null){
        return;
    }
    const {imageUrl,firstName,lastName,email,contactNumber,dob}=employee;
  
    return (
    <div className='single_employees'>
        <div className='single_employees_name'>
            <span className='single_employees_name_Info'> Employee Information</span>
            
           
           <div className='single_employees_name_Info_image_container'>
           <img src={imageUrl} alt='another'/>
            </div>
            <div className='single_employees_name_Info_all_info'>
            <h4>Name: {`${firstName} ${lastName}`}</h4>
            <h4>Email: {email}</h4>
            <h4>Contact No: {contactNumber}</h4>
            <h4>Dob: {dob}</h4>
            </div>

    
            
            
        </div>
      
    </div>
  )
}

export default Singleemployee
