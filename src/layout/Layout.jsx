import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="m-2 h-full full-height">
      <main className="font-jaldi mb-16 h-full full-height">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout;
