import React, { Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'

const Layout:React.FC = () => {
  return (
    <div>
        <h1>React Route-based Code Splitting</h1>
        <ul>
            <li>
                <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
                <NavLink to={"/first"}>First exercise</NavLink>
            </li>
        </ul>
        <ErrorBoundary>
            <Suspense fallback={<div>Loading page...</div>}>
            <Outlet/>
            </Suspense>
        </ErrorBoundary>
    </div>
  )
}

export default Layout