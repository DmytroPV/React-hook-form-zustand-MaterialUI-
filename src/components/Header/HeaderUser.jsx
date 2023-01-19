import React, { useState } from "react"
// import { useSelector, useDispatch } from "react-redux"
import { NavLink, useLocation } from 'react-router-dom'

import { MAIN_DARK, AUTH_TEXT_COLOR } from "../../assets/themes/colors"

// import { fetchLogout } from "../../ducks/userInfo"
import LogoHead from "./LogoHead"
import PointsBal from "./PointsBal"
import MobileMenu from "./MobileMenu"
import Logouticon from "./Logouticon"
import Navigation from "./Navigation"
import {
    DesktopWidth,
    TabletWidth,
    MobileWidth,
    ContainerHeader,
    LeftBlock,
    MenuHeaderBlock,
    MenuContact,
    MenuSection,
    MobileHamburgerContainer,
    MobileHamburgerLine,
    MobileHamburgerDarkened,
    MobileHamburgerbackground
} from "./Header.styled"

const linkActiveColorDesktop = ({ isActive }) => { return { color: isActive ? MAIN_DARK : AUTH_TEXT_COLOR } }

const HeaderUser = () => {
    // const dispatch = useDispatch()
    // const logout = () => dispatch(fetchLogout(formData))
    const logout = () => alert('Hallo')
    // const userData = useSelector(state => state.userInfo.userData)
    // const userName = userData ? userData.email : null
    const userName = 'Danill'
    const nameLetter = userName ? userName.charAt(0) : null
    const [menuOpened, setMenuOpened] = useState(false)
    const toggleMenu = () => { setMenuOpened(!menuOpened) }
    const location = useLocation()
    return (
        <>
            {/* ====== 870=< Desktop ====== */}
            <DesktopWidth>
                <ContainerHeader>
                    <LeftBlock>
                        <LogoHead />
                        {location.pathname === '/' &&
                            <PointsBal />
                        }
                    </LeftBlock>
                    <MenuHeaderBlock>
                        <NavLink to="/" style={linkActiveColorDesktop} >
                            <MenuSection>Home</MenuSection>
                        </NavLink>
                        <NavLink to="planning" style={linkActiveColorDesktop} >
                            <MenuSection>Planning</MenuSection>
                        </NavLink>
                        <NavLink to="awards" style={linkActiveColorDesktop} >
                            <MenuSection>Awards</MenuSection>
                        </NavLink>
                        <NavLink to="contacts" style={linkActiveColorDesktop} >
                            <MenuContact>Contacts</MenuContact>
                        </NavLink>
                        <Logouticon nameLetter={nameLetter} userName={userName} logoutProps={logout} />
                    </MenuHeaderBlock>
                </ContainerHeader>
            </DesktopWidth>
            {/* ==== 531=< Tablet <=869 ==== */}
            <TabletWidth>
                <ContainerHeader>
                    <LeftBlock>
                        <LogoHead />
                        <PointsBal />
                    </LeftBlock>
                    <MenuHeaderBlock>
                        <MobileHamburgerContainer onClick={toggleMenu} >
                            <MobileHamburgerLine />
                        </MobileHamburgerContainer>
                        <Logouticon nameLetter={nameLetter} userName={userName} logoutProps={logout} />
                    </MenuHeaderBlock>
                </ContainerHeader>
                {menuOpened &&
                    <MobileHamburgerDarkened >
                    </MobileHamburgerDarkened>
                }
                <MobileHamburgerbackground Active={menuOpened}>
                    <Navigation hideMobileмenu={toggleMenu} />
                </MobileHamburgerbackground>
            </TabletWidth>
            {/* // ======= Mobile <=530 ====== */}
            <MobileWidth>
                <MobileMenu nameLetter={nameLetter} userName={userName} logoutProps={logout} />
            </MobileWidth>
        </>
    )
}

export default HeaderUser


