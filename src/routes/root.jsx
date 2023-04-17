import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import SwipeableEdgeDrawer from "../components/SwipeableEdgeDrawer";
import Login from "../pages/Login";
export default function Root() {
  const auth = useSelector((state) => state?.auth);
  console.log(auth);
  const [openNav, setOpenNav] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const handleNavClick = (path) => {
    setOpenNav(!openNav);
    navigate(path);
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader isHome={true} isLoading={isLoading} />
      ) : auth?.user?.id !== undefined ? (
        <>
          <SwipeableEdgeDrawer handleNavClick={handleNavClick} />
          <div
            style={{
              marginTop: "3.4rem",
              marginBottom: "5rem",
              width: "100vw",
            }}
          >
            <Outlet />
          </div>
        </>
      ) : (
        <Login />
      )}
    </>
  );
}
