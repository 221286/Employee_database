import React from 'react'

const Header = ({setshowmodal}) => {
  return (
    <>
        <header className='header-container'>
            <h1 >Employee Database Management</h1>
            <button onClick={()=>{setshowmodal(true)}}>Add Employees</button>
        </header>
      
    </>
  )
}

export default Header
