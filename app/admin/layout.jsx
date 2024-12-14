import React from 'react'
import Header from './component/Header'

const layout = ({children}) => {
  return (
    <>
    <Header/>
    <main>
        this is layout
      {children}
    </main>
    </>
  )
}

export default layout
