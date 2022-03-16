import React, {Fragment} from 'react'
import Login from './components/login/Login'
import GlobalStyle from './styles/Global'


export default function App() {
  return (
      <Fragment>
          <GlobalStyle />
          <Login />
      </Fragment> 
  )
}