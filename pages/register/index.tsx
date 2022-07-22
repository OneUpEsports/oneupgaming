import { NextPage } from "next";
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// Forms 
import Helmet from "react-helmet";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Styling 
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

const Register: NextPage = () => {
  const router = useRouter();

  const schema = yup.object({
    email: yup.string().email().required(),
    username: yup.string().required(),
    password: yup
      .string()
      .required()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,50})/,
        "Password must be between 6-50 characters, with at least one uppercase, lowercase letter and a number"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required(),
    voucherCode: yup.string(),
    ageCondition: yup.bool().required(),
    termsOfUse: yup.bool().required(),
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ resolver: yupResolver(schema) }) as unknown | any;

  const submitHandler = async (data: object) => {
    try {
    const res = await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      const response = await res.json()
      if(response === "SUCCESS") {
        router.push("/login");
      }
    } catch(error: any) {
      console.log(error)
      return;
    }
  };

  return (
    <>
    <Helmet title="Oneupgaming • Register" defer={false} />
      <Box
        component={"div"}
        sx={{
          background: "#2F2F2F", // main background color
          height: { xs: "100%", sm: "100vh", md: "100vh", lg: "100vh" },
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
            backgroundColor: "#000000", // box background color
            padding: "2rem",
          }}
        >
          <Typography
            variant={"h4"}
            sx={{ marginBottom: "2rem", marginTop: "1rem", color: "#ffffff" }} // title color
            align={"center"}
          >
            Register a new account
          </Typography>
          <form onSubmit={handleSubmit(submitHandler)}>
            <Box component={"div"} sx={{ marginY: "1rem" }}>
              <Typography variant={"subtitle1"} color={"white"} gutterBottom>
                Email<sup>*</sup>
              </Typography>
              <Controller
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    variant={"standard"}
                    fullWidth
                    focused={true}
                    sx={{ input: { color: "white" } }} // placeholder color
                    type={"email"}
                    placeholder={"email"}
                    error={!!errors.email}
                    helperText={errors.email ? errors.email?.message : ""}
                  />
                )}
                name={"email"}
              />
            </Box>
            <Box component={"div"} sx={{ marginY: "1rem" }}>
              <Typography variant={"subtitle1"} color={"white"} gutterBottom>
                Username<sup>*</sup>
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
                    type={"text"}
                    placeholder={"username"}
                    error={!!errors.username}
                    helperText={errors.username ? errors.username?.message : ""}
                  />
                )}
                name={"username"}
              />
            </Box>
            <Box component={"div"} sx={{ marginY: "1rem" }}>
              <Typography variant={"subtitle1"} color={"white"} gutterBottom>
                Password<sup>*</sup>
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
              <FormHelperText sx={{ color: "#868783" }}>
                For security reasons, passwords must contain between 6 to 50
                characters
              </FormHelperText>
            </Box>
            <Box component={"div"} sx={{ marginY: "1rem" }}>
              <Typography variant={"subtitle1"} color={"white"} gutterBottom>
                Confirm Password<sup>*</sup>
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
                    placeholder={"confirm password"}
                    error={!!errors.confirmPassword}
                    helperText={
                      errors.confirmPassword
                        ? errors.confirmPassword?.message
                        : ""
                    }
                  />
                )}
                name={"confirmPassword"}
              />
            </Box>
            <Box component={"div"} sx={{ marginY: "1rem" }}>
            </Box>
            <Box
              component={"div"}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                color: "white", // agreement text color
                marginY: "1rem",
              }}
            >
              <Controller
                control={control}
                render={({ field }) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        {...field}
                        sx={{ color: errors?.ageCondition ? "red" : "#ffffff" }}
                        size={"small"}
                      />
                    }
                    label={
                      <Typography variant={"subtitle2"}>
                        I am over 12 years old AND if I am below 16, my parents
                        authorize me to access this website.
                      </Typography>
                    }
                  />
                )}
                name={"ageCondition"}
              />
              <Controller
                control={control}
                render={({ field }) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        {...field}
                        sx={{ color: errors?.termsOfUse ? "red" : "#ffffff" }}
                        size={"small"}
                      />
                    }
                    label={
                      <Typography variant={"subtitle2"}>
                        I accept the{" "}
                        <u>
                          <Link href={"/tos"}> Terms of use </Link>
                        </u>{" "}
                        and I acknowledge having read the{" "}
                        <u>
                          <Link href={"/privacy"}>
                            Privacy and cookies policy.
                          </Link>
                        </u>
                      </Typography>
                    }
                  />
                )}
                name={"termsOfUse"}
              />
              <Controller
                control={control}
                render={({ field }) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        {...field}
                        sx={{ color: "#ffffff" }} // checkbox 3 color
                        size={"small"}
                      />
                    }
                    label={
                      <Typography variant={"subtitle2"}>
                        I agree to receive communication from OneUpGaming and their
                        partners.
                      </Typography>
                    }
                  />
                )}
                name={"receiveCommunication"}
              />
            </Box>
            <Box
              component={"div"}
              sx={{ marginTop: "1rem", marginBottom: "2rem" }}
            >
              <Button
                sx={{
                  textTransform: "uppercase",
                  color: "success",
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
                type={"submit"}
                fullWidth
                variant={"contained"}
              >
                join now
              </Button>
            </Box>
          </form>
          <Typography
            color={"white"}
            sx={{ width: "100%", fontWeight: "bold", color: "#868783" }}
            align={"center"}
          >
            Already have an account?{" "}
            <Link href={"/login"}>
              <Button
                sx={{ fontWeight: "bold" }}
                disableRipple={true}
                variant={"text"}
              >
                Log in
              </Button>
            </Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Register;