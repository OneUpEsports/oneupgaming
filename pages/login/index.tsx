import { NextPage } from "next";
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// Forms
import Helmet from "react-helmet";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// Styling
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

const Login: NextPage = () => {
  const [error, setError] = useState("");

  const router = useRouter();

  const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  }) as any | unknown;

  const submitHandler = async (data: object) => {
    try {
      const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      const response = await res.json();

      if (response === "SUCCESS") {
        localStorage.setItem("userData", JSON.stringify(data.data));
        router.push("/dashboard");
      } else {
        setError("Invalid Credentials!");
      }
    } catch (error: any) {
      console.log(error)
      return;
    }
  };

  return (
    <>
      <Helmet title="Oneupgaming • Login" defer={false} />
      <Box
        component={"div"}
        sx={{
          background: "#2F2F2F",
          height: { xs: "100vh", sm: "100vh", md: "100vh", lg: "100vh" },
          paddingY: { xs: "2rem", sm: "2rem", md: "2rem", lg: "2rem" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component={"div"}
          sx={{
            width: { xs: "20rem", sm: "30rem", md: "35rem", lg: "35rem" },
            borderRadius: "0.5rem",
            backgroundColor: "#000000",
            padding: "2rem",
          }}
        >
          <Typography
            sx={{
              marginBottom: "2rem",
              marginTop: "1rem",
              color: "#ffffff",
              fontSize: "3rem",
            }}
            align={"center"}
          >
            Login
          </Typography>
          <Typography
            sx={{ marginBottom: "2rem", color: "#ffffff", fontSize: "1.5rem" }}
            align={"center"}
          ></Typography>
          <form onSubmit={handleSubmit(submitHandler)}>
            <Box component={"div"} sx={{ marginY: "1rem" }}>
              <Typography variant={"subtitle1"} color={"white"} gutterBottom>
                Email / Username
              </Typography>
              <Controller
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    variant={"standard"}
                    fullWidth
                    focused={true}
                    sx={{ input: { color: "white" } }}
                    type={"email"}
                    placeholder={"my@email.com"}
                    error={!!errors.email}
                    helperText={errors.email ? errors.email?.message : ""}
                  />
                )}
                name={"email"}
              />
            </Box>
            <Box component={"div"} sx={{ marginY: "1rem" }}>
              <Typography variant={"subtitle1"} color={"white"} gutterBottom>
                Password
              </Typography>
              <Controller
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    variant={"standard"}
                    fullWidth
                    focused={true}
                    sx={{ input: { color: "white" } }}
                    type={"password"}
                    placeholder={"password"}
                    error={!!errors.password}
                    helperText={errors.password ? errors.password?.message : ""}
                  />
                )}
                name={"password"}
              />
            </Box>
            <Box
              component={"div"}
              sx={{ marginTop: "1rem", marginBottom: "1rem" }}
            >
              <Button
                sx={{
                  textTransform: "uppercase",
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
                type={"submit"}
                fullWidth
                variant={"contained"}
              >
                log in
              </Button>
            </Box>
          </form>
          {error && (
            <Typography
              sx={{ color: "red", fontSize: "1rem", marginY: "1rem" }}
              align={"center"}
            >
              {error}
            </Typography>
          )}
          <Link href={"/register"} passHref>
            <Typography
              color={"white"}
              sx={{
                width: "100%",
                fontWeight: "bold",
                color: "#868783",
                cursor: "pointer",
                textDecoration: "underline",
                marginBottom: "1rem",
              }}
              align={"center"}
            >
              Not a member yet ?
            </Typography>
          </Link>
          <Link href={"/reset"} passHref>
            <Typography
              color={"white"}
              sx={{
                width: "100%",
                fontWeight: "bold",
                color: "#868783",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              align={"center"}
            >
              Forgot your password ?
            </Typography>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Login;