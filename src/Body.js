import React from 'react'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Components/Login'
import { createBrowserHistory } from 'history'

const Body = () => {
  const history = createBrowserHistory()
    const Routes = createBrowserRouter([
        {
            path:"/",
            element:<Login />,
            
        },
        {
          path:"/datapage",
          element:<App/>
          
        }
    ])
  return (
    <div className='Body'>
    <RouterProvider router={Routes} history={history}></RouterProvider>
    </div>
      
    
  )
}

export default Body
