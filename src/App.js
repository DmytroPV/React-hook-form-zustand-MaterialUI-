import React from "react"

import GlobalFonts from './assets/fonts/fonts'
import GlobalStylesReset from './assets/reset'
import Router from './Router'

// import { AuthForm, LoginForm } from './components/forms'

function App() {
  return (
   <>
      <GlobalFonts />
      <GlobalStylesReset />

      {/* <AuthForm /> */}
      {/* <LoginForm /> */}
      <Router /> 
   </>
  )
}

export default App
