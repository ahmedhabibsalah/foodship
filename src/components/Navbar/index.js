import React from 'react'
import { Nav, NavLink, NavIcon, Bars, Cart } from './NavbarElements'

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to="/">Foodship</NavLink>
                <NavIcon>                   
                    <Bars onClick={toggle} />
                    <Cart />
                </NavIcon>                
            </Nav>
        </>
    )
}

export default Navbar