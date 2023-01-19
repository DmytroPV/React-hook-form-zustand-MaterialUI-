import React from "react"
import { PropTypes } from "prop-types"
import { NavLink } from 'react-router-dom'

import {
    ExitIconWrapper,
    MenuInitiaLetterCircle,
    MenuInitiaLetter,
    MenuName
} from "./Header.styled"
import ExitIcon from "../../assets/image/Header-exit-icon.svg"

const Logouticon = (props) => {
    const logoutAction = () => { props.logoutProps() }

    return (
        <>
            <MenuInitiaLetterCircle>
                <MenuInitiaLetter>{props.nameLetter}</MenuInitiaLetter>
            </MenuInitiaLetterCircle>
            <MenuName>{props.userName}</MenuName>
            <NavLink to="auth" onClick={logoutAction}>
                <ExitIconWrapper src={ExitIcon} alt="ExitIcon" />
            </NavLink>
        </>
    )
}

Logouticon.propTypes = {
    nameLetter: PropTypes.string,
    userName: PropTypes.string,
    logoutAction: PropTypes.func
}

export default Logouticon