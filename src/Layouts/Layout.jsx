import React from 'react'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'
import ModelMessage from '../components/common/ModelMessage'

const Layout = () => {
  return (
    <>
        <Header />
        <ModelMessage />
        <Outlet />
    </>
  )
}

export default Layout
