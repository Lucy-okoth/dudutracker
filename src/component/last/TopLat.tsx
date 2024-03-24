"use client";

import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const TopLat = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
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
          Starting Period
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
            id="timestep"
            label="Time step"
            name="timestep"
            autoFocus
            type="number"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="duration"
            label="Duration"
            name="duration"
            autoFocus
            type="number"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default TopLat;
