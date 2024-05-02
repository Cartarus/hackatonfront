import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LocalValidator } from './pages/LocalValidator'
import { Login } from './pages/Login'
import { FolderValidator } from './pages/FolderValidator'
import PrivateRoute from './components/shared/PrivateRoute'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" >
          <Route index element={<LocalValidator />} />
          <Route path="login" element={<Login />} />
          <Route path="folderValidator" 
                element={ 
                  <PrivateRoute element={<FolderValidator />} /> 
                } />
          {/* <Route path="contact" element={<Contact />} />*/}
          <Route path="*" element={<Login />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
