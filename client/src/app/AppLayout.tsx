import React from "react"
import { NavLink, Outlet } from "react-router-dom"
import ROUTES from "./routes"

export default function AppLayout() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to={ROUTES.indexRoute()} >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={ROUTES.profileRoute()} >
                            Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={ROUTES.ordersRoute()} >
                            Shopping Cart
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}