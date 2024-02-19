import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom"
import ProductsPage from "../features/products/ProductsPage"
import ProfilePage from "../features/profile/ProfilePage"
import OrdersPage from "../features/orders/OrdersPage"
import LoginPage from "../features/auth/LoginPage"
import Header from "./components/Header"
import { useSelector } from "react-redux"
import { selectIsAuthenticated } from "../features/auth/authSlice"

export enum Path {
  INDEX = "/",
  PROFILE = "/profile",
  LOGIN = "/login",
  ORDERS = "/orders",
}

const AuthGuard: React.FC = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated)
  return isAuthenticated ? <Outlet /> : <Navigate to={Path.LOGIN} replace />;
};

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container content">
        <Routes>
          <Route index element={<ProductsPage />} />
          <Route path={Path.LOGIN} element={<LoginPage />} />

          <Route element={<AuthGuard />}>
            <Route path={Path.PROFILE} element={<ProfilePage />} />
            <Route path={Path.ORDERS} element={<OrdersPage />} />
          </Route>

        </Routes>
      </main>
    </BrowserRouter>
  )
};
