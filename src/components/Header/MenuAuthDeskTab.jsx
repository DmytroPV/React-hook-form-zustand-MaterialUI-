import React from "react"
import { NavLink } from 'react-router-dom'

import { MenuContactAuth, MenuSection } from "./Header.styled"
import { MAIN_DARK, AUTH_TEXT_COLOR } from "../../assets/themes/colors"

const linkActiveColorDesktop = ({ isActive }) => { return { color: isActive ? MAIN_DARK : AUTH_TEXT_COLOR } }

const MenuAuthDeskTab = () => {
    return (
        <>
            <NavLink to="auth" style={linkActiveColorDesktop} >
                <MenuSection>Authorization</MenuSection>
            </NavLink>
            <NavLink to="login" style={linkActiveColorDesktop} >
                <MenuSection>Login</MenuSection>
            </NavLink>
            <NavLink to="contacts" style={linkActiveColorDesktop} >
                <MenuContactAuth>Contacts</MenuContactAuth>
            </NavLink>
        </>
    )
}

export default MenuAuthDeskTab