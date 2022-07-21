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
         <link to="/">Home</link>
       </li>
       <li> <link to="/profile">profile</link></li>
       <li> <link to="/contact">contact</link></li>
       <li> <link to="/address">address</link></li>
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
