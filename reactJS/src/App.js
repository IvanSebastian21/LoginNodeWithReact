// REACT
import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
// CSS
import './index.css'
// RUTAS
import NavBar from './components/NavBar'
import Action from "./components/Action"
// CRUD
import AddUser from "./components/forms/AddUser"
import PatchUser from "./components/forms/PatchUser"


function App() {
  return (
    <div className="App">        
        <Routes>
          <Route path="/" element={<NavBar />}>
            
            {/* RUTA FORMULARIO */}
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
