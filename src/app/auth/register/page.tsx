"use client";

import { Email, Lock, Person, Person2, Phone } from "@mui/icons-material";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import { FilePond, registerPlugin } from "react-filepond";
import { useState } from "react";

import "filepond/dist/filepond.min.css";

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const schema = yup
  .object({
    username: yup.string().required().label("Username"),
    email: yup.string().email().required().label("Email"),
    fullName: yup.string().required().label("Full Name"),
    // TODO -> verify phone number by regex
    phoneNumber: yup.string().required().label("Phone Number"),
    password: yup.string().min(8).required().label("Password"),
  })
  .required();

const Register = () => {
  const [profile, setProfile] = useState<any>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRegisterUser = (data: any) => {
    Swal.fire({
      title: "Successfull!",
      text: `Ready to save ${data.fullName} information to db.`,
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
      onSubmit={handleSubmit(handleRegisterUser)}
    >
      <TextField
        label="username"
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
      />
      <TextField
        label="Full Name"
        variant="outlined"
        {...register("fullName")}
        error={errors.fullName && true}
        helperText={errors.fullName?.message}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Person2 />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="email"
        variant="outlined"
        type="email"
        {...register("email")}
        error={errors.email && true}
        helperText={errors.email?.message}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Email />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Phone Number"
        variant="outlined"
        type="tel"
        {...register("phoneNumber")}
        error={errors.phoneNumber && true}
        helperText={errors.phoneNumber?.message}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Phone />
            </InputAdornment>
          ),
        }}
      />
      <FilePond
        files={profile}
        onupdatefiles={setProfile}
        labelIdle='Drag & Drop or <span class="filepond--label-action">Browse</span>'
        credits={false}
        name="profile"
        allowRevert={false}
        instantUpload={false}
        allowMultiple={false}
        acceptedFileTypes={["images"]}
        checkValidity
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        {...register("password")}
        error={errors.password && true}
        helperText={errors.password?.message}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Lock />
            </InputAdornment>
          ),
        }}
      />
      <Box>
        <Button variant="contained" type="submit" color="primary" size="large">
          Register
        </Button>
      </Box>
    </Box>
  );
};
export default Register;
