import React from "react"

// import store from "../../store"
import { PointsBalance, NumberBalance } from "./Header.styled"

const PointsBal = () => {
    // const userAuthorized = store.getState().userInfo.userData
    // const userBalance = userAuthorized ? store.getState().userInfo.userData.balance : 0

    return (
        <PointsBalance>
            Points balance:
            <NumberBalance>
                {/* {userBalance} */}
                0
            </NumberBalance>
        </PointsBalance>
    )
}

export default PointsBal