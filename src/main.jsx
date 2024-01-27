import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider, Route} from 'react-router-dom'
import AboutUsPage from './pages/aboutus.jsx'
import ContactUsPage from './pages/contactus.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "aboutus",
    element: <AboutUsPage/>
  },
  {
    path: "contactus",
    element: <ContactUsPage/>
  }


])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <RouterProvider router={router}/>

)
