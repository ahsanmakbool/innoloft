import React from "react";
import { Outlet } from "react-router-dom";
const Header = React.lazy(() => import("../components/Header"));

function Layout() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-foggySummer w-full">
        <Header />
        <main className="h-full bg-smoke-white">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;
