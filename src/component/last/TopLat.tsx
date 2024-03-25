"use client";
import React, { useState, useRef } from "react";
import { CssBaseline, TextField, Box, Typography, Container, MenuItem } from "@mui/material";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const TopLat = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const calendarRef = useRef<HTMLDivElement | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  const handleYearClick = () => {
    calendarRef.current?.classList.toggle("hidden");
  };

  const handleDateChange = (date: Date | Date[]) => {
    if (date instanceof Date) {
      setSelectedDate(date);
      calendarRef.current?.classList.add("hidden");
    }
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
            id="year"
            label="Year"
            name="year"
            autoFocus
            type="number"
            onClick={handleYearClick}
            value={selectedDate?.getFullYear() || ""}
            InputProps={{
              readOnly: true,
            }}
          />
          <div ref={calendarRef} className="hidden">
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
              tileContent={({ date, view }) => {
                if (view === "month") {
                  return <div>{date.toLocaleDateString("en-US", { month: "short" })}</div>;
                }
                return null;
              }}
            />
          </div>
          <TextField
            select
            margin="normal"
            required
            fullWidth
            id="timestep"
            label="Time step"
            name="timestep"
            autoFocus
            type="number"
          >
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
          </TextField>
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