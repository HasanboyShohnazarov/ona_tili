import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import HeaderPage from '../pages/HeaderPage'
import FooterPage from '../pages/FooterPage'


const Layout = () => {
 
  return (
    <>
    <header><HeaderPage/></header>
    <main><Outlet/></main>
    <footer><FooterPage/></footer>
    </>
  )
}

export default Layout