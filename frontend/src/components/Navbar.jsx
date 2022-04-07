import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
  } from './NavbarElements';


  export default function Navbar() {
   

    return (
        <div>
      <Nav>
        <Bars />
  
        <NavMenu>
         {/* <NavLink to='/login' activeStyle>
            Login
          </NavLink>
    */}
          <NavLink to='/registration' activeStyle>
            Registration
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </div>
  )
}
