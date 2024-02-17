import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "./AppLayout"
import ProductsPage from "../features/products/ProductsPage"
import Profile from "../features/profile/Profile"
import Orders from "../features/orders/Orders"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<ProductsPage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};
