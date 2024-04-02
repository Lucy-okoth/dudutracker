"use client";

import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import SidebarPanel from "../panel/SidebarPanel";
import { useState } from "react";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Navbar = () => {
  const [sidepanelOpen, setSidePanelOpen] = useState<boolean>(false);

  function toggleSidePanel() {
    setSidePanelOpen(!sidepanelOpen);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <AppBar variant="elevation" position="fixed" color="primary">
        <Container>
          <Toolbar disableGutters>
            <IconButton
              sx={{
                mx: 2,
                color: "white",
              }}
              onClick={toggleSidePanel}
            >
              <MenuIcon />
            </IconButton>
            <Link href="/" passHref legacyBehavior>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <svg width="32" height="32">
                  <image
                    xlinkHref="/images/logo.png"
                    style={{
                      borderRadius: "5px",
                      height: "40px",
                      width: "35px",
                      paddingLeft: "1 rem",
                      margin: "0 10px",
                      display: "inline",
                    }}
                  ></image>
                </svg>
                <Typography variant="h6" sx={{ paddingLeft: "0.5rem" }}>
                  DuduTracker
                </Typography>
              </Box>
            </Link>
            <Box flexGrow={1}></Box>
            <Box>
              <Button sx={{ color: "#fff" }} href="/auth/login">
                Login
              </Button>
              <Button sx={{ color: "#fff" }} href="/auth/register">
                Register
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <SidebarPanel toggleSidePanel={toggleSidePanel} open={sidepanelOpen} />
    </LocalizationProvider>
  );
};
export default Navbar;
