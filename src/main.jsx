import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements} from 'react-router-dom'
import AboutUsPage from './pages/aboutus.jsx'
import ContactUsPage from './pages/contactus.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<App/>}/>
      <Route path='/aboutus' exact element={<AboutUsPage/>}/>
      <Route path='/contactus' exact element={<ContactUsPage/>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
