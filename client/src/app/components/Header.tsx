import { NavLink } from "react-router-dom";
import { Path } from "../AppRoutes";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../features/auth/authSlice";

export default function Header() {
    const isAuthenticated = useSelector(selectIsAuthenticated)
    return (
        <header>
            <NavLink to={Path.INDEX}>Home</NavLink>
            {isAuthenticated ? (
                <>
                    <NavLink to={Path.PROFILE}>Profile</NavLink>
                    <NavLink to={Path.ORDERS}>Shopping Cart</NavLink>
                </>
            ) : (
                <NavLink to={Path.LOGIN}>Login</NavLink>
            )}
        </header>
    )
}