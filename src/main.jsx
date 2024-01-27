import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements} from 'react-router-dom'
import AboutUsPage from './pages/aboutus'
import ContactUsPage from './pages/contactus'
import ItemDetailsPage from './pages/itemdetails'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<App/>}/>
      <Route path='/aboutus'  element={<AboutUsPage/>}/>
      <Route path='/contactus'  element={<ContactUsPage/>}/>
      <Route path='/itemdetails/:id'  element={<ItemDetailsPage />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>

)
