import React from 'react'

const Employess = ({userlist,setemployee}) => {
  return (
    <div className='employees'>
        <div className='employees_name'>
            <span className='employees_name_title'>Employee List</span>
            <ul className='employee-list-container'>
                {userlist.map((user,index)=>{const listItemClasses=user.isSelected ? 'selected' : '';
                  return (<li key={user.id} className='listItemClasses' onClick={()=>{setemployee(user)}}>{`${user.firstName} ${user.lastName}`}</li>)})}
            </ul>
        </div>
      
    </div>
  )
}

export default Employess 
