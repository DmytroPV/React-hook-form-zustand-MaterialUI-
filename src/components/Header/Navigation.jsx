import React from "react"
import { PropTypes } from "prop-types"
import { NavLink } from 'react-router-dom'

import { MAIN_DARK, MAIN_BACKGROUND } from "../../assets/themes/colors"

import {
    MobileHamburgerCrossBox,
    MobileHamburgerCross,
    MobileHamburgerCrossHolder,
    MobileHamburgerSectionMenuUp,
    MobileHamburgerSectionMenu
} from "./Header.styled"

const linkActiveColor = ({ isActive }) => { return { color: isActive ? MAIN_DARK : MAIN_BACKGROUND } }

const Navigation = (props) => {
    const toggleMenu = () => { props.hideMobileмenu() }
    return (
        <>
            <MobileHamburgerCrossBox onClick={toggleMenu}>
                <MobileHamburgerCross>
                    <MobileHamburgerCrossHolder />
                </MobileHamburgerCross>
            </MobileHamburgerCrossBox>
            <NavLink to="/" onClick={toggleMenu} style={linkActiveColor} >
                <MobileHamburgerSectionMenuUp>Home</MobileHamburgerSectionMenuUp>
            </NavLink>
            <NavLink to="planning" onClick={toggleMenu} style={linkActiveColor} >
                <MobileHamburgerSectionMenu>Planning</MobileHamburgerSectionMenu>
            </NavLink>
            <NavLink to="awards" onClick={toggleMenu} style={linkActiveColor} >
                <MobileHamburgerSectionMenu>Awards</MobileHamburgerSectionMenu>
            </NavLink>
            <NavLink to="contacts" onClick={toggleMenu} style={linkActiveColor} >
                <MobileHamburgerSectionMenu>Contacts</MobileHamburgerSectionMenu>
            </NavLink>
        </>
    )
}

Navigation.propTypes = {
    hideMobileмenu: PropTypes.func
}

export default Navigation


