"use client";

import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Bottom = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Calibrate
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="lat"
            label="Lat"
            name="lat"
            autoFocus
            type="number"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lon"
            label="Lon"
            name="lon"
            autoFocus
            type="number"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="month"
            label="Month"
            name="month"
            autoFocus
            type="number"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="year"
            label="Year"
            name="year"
            autoFocus
            type="number"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="diff"
            label="Diff"
            type="text"
            id="diff"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Calibrate
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Bottom;
