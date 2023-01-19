import React, { useState } from "react"
import { PropTypes } from "prop-types"
import { NavLink } from 'react-router-dom'

import LogoHead from "./LogoHead"
import PointsBal from "./PointsBal"
import Navigation from "./Navigation"
import {
    ContainerHeader,
    ExitIconWrapper,
    LeftBlock,
    MenuHeaderBlock,
    MenuInitiaLetterCircle,
    MenuInitiaLetter,
    MenuName,
    MobileHamburgerContainer,
    MobileHamburgerLine,
    MobileHamburgerbackground,
    MobileHamburgerLoginBox
} from "./Header.styled"
import ExitIconMobile from "../../assets/image/Header-exit-icon-mobile.svg"

const MobileMenu = (props) => {
    const logoutAction = () => { props.logoutProps() }
    const [menuOpened, setMenuOpened] = useState(false)
    const toggleMenu = () => { setMenuOpened(!menuOpened) }

    return (
        <>
            <ContainerHeader>
                <LeftBlock>
                    <LogoHead />
                    <PointsBal />
                </LeftBlock>
                <MobileHamburgerContainer onClick={toggleMenu} >
                    <MobileHamburgerLine />
                </MobileHamburgerContainer>
            </ContainerHeader>
            <MobileHamburgerbackground Active={menuOpened}>
                <MobileHamburgerLoginBox>
                    <MenuHeaderBlock>
                        <MenuInitiaLetterCircle>
                            <MenuInitiaLetter>{props.nameLetter}</MenuInitiaLetter>
                        </MenuInitiaLetterCircle>
                        <MenuName>{props.userName}</MenuName>
                        <NavLink to="auth" onClick={logoutAction}>
                            <ExitIconWrapper src={ExitIconMobile} alt="ExitIcon" />
                        </NavLink>
                    </MenuHeaderBlock>
                </MobileHamburgerLoginBox>
                <Navigation hideMobileмenu={toggleMenu} />
            </MobileHamburgerbackground>
        </>
    )
}

MobileMenu.propTypes = {
    nameLetter: PropTypes.string,
    userName: PropTypes.string,
    logoutAction: PropTypes.func
}

export default MobileMenu




