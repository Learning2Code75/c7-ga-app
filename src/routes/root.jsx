import { createTheme, ThemeProvider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import SwipeableEdgeDrawer from "../components/SwipeableEdgeDrawer";
import Login from "../pages/Login";
export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

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

  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <>
          {isLoading ? (
            <Loader isHome={true} isLoading={isLoading} />
          ) : auth?.user?.name !== undefined ? (
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
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
