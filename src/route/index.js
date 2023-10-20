import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
const MainPage = React.lazy(() => import("../views/Main"));
const ProductDetail = React.lazy(() => import("../views/ProductDetail"));
const Layout = React.lazy(() => import("../layout"));
const Loader = React.lazy(() => import("../components/Loader"));

function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route name="Home" element={<Layout />}>
            <Route path="/" name="Main Page" element={<MainPage />} />
            <Route
              path="/product/:id"
              name="Product Detail"
              element={<ProductDetail />}
            />
            <Route path="/" element={<Navigate to="Main Page" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRoutes;
