// REACT
import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
// CSS
import './index.css'
// RUTAS
import Login from './pages/Login'
import NavBar from './pages/NavBar'
import Action from "./pages/Action"
// CRUD
import AddUser from "./components/crud/AddUser"
import PatchUser from "./components/crud/PatchUser"


function App() {
  return (
    <div className="App">        
        <Routes>
          <Route path="/" element={<Login />}/>
            
            {/* RUTA FORMULARIO */}
            <Route path="NavBar" element={<NavBar />}>
            <Route path="Action" element={<Action/>}/>
            
            {/* CRUD */}
            <Route path="AddUser" element={<AddUser/>}/>
            <Route path="PatchUser" element={<PatchUser/>}/>
            
            {/* RUTA DEFAULT */}        
            <Route path="*" element={<Navigate replace to="/"/>}/>
          </Route>
        </Routes>
    </div>
  )
}

export default App
