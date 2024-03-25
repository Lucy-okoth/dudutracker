import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  return (
    <AppBar variant="elevation" position="fixed" color="primary">
      <Container>
        <Toolbar disableGutters>
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
  );
};
export default Navbar;
