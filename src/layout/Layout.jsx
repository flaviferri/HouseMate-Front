import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../components/header/Header"

const Layout = () => {
  return (
    <div className="m-2 h-full">
      <Header />
      <main className="font-jaldi mb-16 h-full">
       
        <Outlet />
      </main>
    </div>
  )
}

export default Layout;
