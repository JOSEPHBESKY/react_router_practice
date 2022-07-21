import React, { Component } from 'react'
import { BrowserRouter,Router,route, Routes, Route } from 'react-router-dom'
import home from './home'
import profile from './profile'
import contact from './contact'
import address from './address'
import submit from './submit'

export default class App extends Component {
  render() {
    return (
      <div>
       <BrowserRouter>
       <ul>
       <li>
         <NavLink to="/" style={({isActive})=>isActive ? {color:'red'}:null}>Home</NavLink>
       </li>
         <NavLink to="/">Home</NavLink>
       <li> <NavLink to="/profile"  style={({isActive})=>isActive ? {color:'red'}:null}>profile</NavLink></li>
       <li> <NavLink to="/profile"  style={({isActive})=>isActive ? {color:'red'}:null}>profile</NavLink></li>
       <li> <NavLink to="/profile"  style={({isActive})=>isActive ? {color:'red'}:null}>profile</NavLink></li>
       <li> <NavLink to="/contact"  style={({isActive})=>isActive ? {color:'red'}:null}>contact</NavLink></li>
       <li> <NavLink to="/address"  style={({isActive})=>isActive ? {color:'red'}:null}>address</NavLink></li>
     </ul>
     <Routes>
      <Route path="/" element={<home/>}></Route>
      <Route path="/profile" element={<profile/>}></Route>
      <Route path="/contact" element={<contact/>}></Route>
      <Route path="/address" element={<address/>}></Route>
     </Routes>
       </BrowserRouter>
      </div>
    )
  }
}