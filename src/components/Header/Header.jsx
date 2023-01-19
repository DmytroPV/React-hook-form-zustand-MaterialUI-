import React from "react"
// import { useSelector } from "react-redux"

import HeaderAuth from "./HeaderAuth"
import HeaderUser from './HeaderUser'

const Header = () => {
    // const userData = useSelector(state => state.userInfo.userData)
    const userData = false
    return (
        <>
            {userData ? <HeaderUser /> : <HeaderAuth />}
        </>
    )
}

export default Header

