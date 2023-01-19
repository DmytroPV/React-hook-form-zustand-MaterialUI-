import React from "react"
import { NavLink } from 'react-router-dom'

import { LogoHeader, LogoHeaderSVG } from "./Header.styled"
import LogoIcon from '../../assets/image/Header-kids-logo.svg'

const LogoHead = () => {
    return (
        <NavLink to="/">
            <LogoHeader  >
                KidsLike
                <LogoHeaderSVG src={LogoIcon} alt="Logo header" />
            </LogoHeader>
        </NavLink>
    )
}

export default LogoHead

