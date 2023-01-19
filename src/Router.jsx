import React from "react"
import { Routes, Route } from "react-router-dom"

import { Layout } from './components/Layout'

// import MainPage from './pages/MainPage'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import Contacts from './pages/Contacts'
// import DiaryPage from './pages/DiaryPage'
// import CalculatorPage from './pages/CalculatorPage'
// import PrivateRoute from '../src/hoc/PrivateRoute'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/* <Route index element={<MainPage />} /> */}
                <Route path="login" element={<SignIn />} />
                <Route path="auth" element={<SignUp />} />
                <Route path="contacts" element={<Contacts />} />
                {/* <Route path="diary" element={
                    <PrivateRoute>
                        <DiaryPage />
                    </PrivateRoute>
                } />
                <Route path="calculator" element={
                    <PrivateRoute>
                        <CalculatorPage />
                    </PrivateRoute>
                } /> */}
                {/* <Route path="*" element={<MainPage />} /> */}
            </Route>
        </Routes>
    )
}

export default Router