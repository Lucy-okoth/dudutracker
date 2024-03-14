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
          <Typography>
            <Link
              href="/"
              style={{
                textDecoration: "none",
                color: "white",
              }}
              color="white"
            >
              {"<DuduTracker Logo>"}
            </Link>
          </Typography>
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
