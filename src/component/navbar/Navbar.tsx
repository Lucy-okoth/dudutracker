import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from '@mui/material';
import Link from 'next/link';

const Navbar = () => {
  return (
    <AppBar position="fixed" color="primary">
      <Container>
        <Toolbar disableGutters>
          <Link href="/" passHref>
            <img
              src="https://bioinnovate-africa.org/wp-content/uploads/2019/06/icipe_logo.jpg"
              alt="Icipe logo"
              className="navbar-logo"
              style={{ width: 80, height: 'auto', borderRadius: '5px' }}
            />
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dudu Tracker
          </Typography>
          <Box>
            <Link href="/auth/login" passHref>
              <Button sx={{ color: '#fff' }}>Login</Button>
            </Link>
            <Link href="/auth/register" passHref>
              <Button sx={{ color: '#fff' }}>Register</Button>
            </Link>
            <Link href="/" passHref>
              <Button sx={{ color: '#fff' }}>Home</Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;