import React, { useState } from "react"
import { NavLink, useLocation } from 'react-router-dom'

import { MAIN_DARK, MAIN_BACKGROUND } from "../../assets/themes/colors"

import LogoHead from "./LogoHead"
import PointsBal from "./PointsBal"
import MenuAuthDeskTab from "./MenuAuthDeskTab"
import {
    DesktopAuthWidth,
    MobileWidth,
    ContainerHeader,
    LeftBlock,
    MenuHeaderBlock,
    MobileHamburgerDarkened,
    MobileHamburgerContainer,
    MobileHamburgerLine,
    MobileHamburgerbackground,
    MobileHamburgerCrossBox,
    MobileHamburgerCross,
    MobileHamburgerCrossHolder,
    MobileHamburgerSectionMenuUp,
    MobileHamburgerSectionMenu
} from "./Header.styled"

const linkActiveColor = ({ isActive }) => { return { color: isActive ? MAIN_DARK : MAIN_BACKGROUND } }

const HeaderAuth = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => { setIsOpen(!isOpen) }
    const location = useLocation()
    return (
        <>
            {/* ====== 870=< Desktop ====== */}
            <DesktopAuthWidth>
                <ContainerHeader>
                    <LogoHead />
                    <MenuHeaderBlock>
                        <MenuAuthDeskTab />
                    </MenuHeaderBlock>
                </ContainerHeader>
            </DesktopAuthWidth>
            {/* ==== Tablet & Mobile <=869 ==== */}
            <MobileWidth>
                <ContainerHeader>
                    <LeftBlock>
                        <LogoHead />
                        {location.pathname === '/' &&
                            <PointsBal />
                        }
                    </LeftBlock>
                    <MobileHamburgerContainer onClick={toggle}>
                        <MobileHamburgerLine />
                    </MobileHamburgerContainer>
                </ContainerHeader>
                {isOpen &&
                    <MobileHamburgerDarkened onClick={toggle} >
                    </MobileHamburgerDarkened>
                }
                <MobileHamburgerbackground Active={isOpen}>
                    <MobileHamburgerCrossBox onClick={toggle}>
                        <MobileHamburgerCross>
                            <MobileHamburgerCrossHolder />
                        </MobileHamburgerCross>
                    </MobileHamburgerCrossBox>
                    <NavLink to="auth" onClick={toggle} style={linkActiveColor} >
                        <MobileHamburgerSectionMenuUp>Authorization</MobileHamburgerSectionMenuUp>
                    </NavLink>
                    <NavLink to="login" onClick={toggle} style={linkActiveColor} >
                        <MobileHamburgerSectionMenu>Login</MobileHamburgerSectionMenu>
                    </NavLink>
                    <NavLink to="contacts" onClick={toggle} style={linkActiveColor} >
                        <MobileHamburgerSectionMenu>Contacts</MobileHamburgerSectionMenu>
                    </NavLink>
                </MobileHamburgerbackground>
            </MobileWidth>
        </>
    )
}

export default HeaderAuth