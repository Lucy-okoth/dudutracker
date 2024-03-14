"use client";

import { Lock, Person, Visibility } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";

const schema = yup
  .object({
    username: yup.string().required().label("Username"),
    password: yup.string().min(8).label("Password").required(),
  })
  .required();

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [showPassword, setShowPassword] = useState(false);

  const handleLoginUser = (data: any) => {
    Swal.fire({
      title: "Successfull!",
      text: `Validated ${data.username} data, ready to sign in.`,
      icon: "success",
      showConfirmButton: false,
    });
  };

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      gap={2}
      onSubmit={handleSubmit(handleLoginUser)}
    >
      <Typography textAlign="center" variant="h5">
        Sign In
      </Typography>
      <Divider sx={{ my: 2 }} />
      <TextField
        label="Username"
        variant="outlined"
        {...register("username")}
        error={errors.username && true}
        helperText={errors.username?.message}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Person />
            </InputAdornment>
          ),
        }}
        fullWidth
      />

      <TextField
        label="Password"
        variant="outlined"
        type={showPassword ? "text" : "password"}
        {...register("password")}
        error={errors.password && true}
        helperText={errors.password?.message}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Lock />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)}>
                <Visibility />
              </IconButton>
            </InputAdornment>
          ),
        }}
        fullWidth
      />

      <Box component="div">
        <Button variant="contained" color="primary" size="large" type="submit">
          Login
        </Button>
      </Box>
    </Box>
  );
};
export default Login;
