import React from 'react'
import Header from './component/Header'

const layout = ({children}) => {
  return (
    <>
    <Header/>
    THIS is user layout
      {children}
    </>
  )
}

export default layout
