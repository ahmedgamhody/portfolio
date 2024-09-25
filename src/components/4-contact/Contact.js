import React, { useEffect, useRef } from "react";
import {
  Box,
  useTheme,
  Typography,
  Stack,
  Alert,
  Grid,
  TextField,
  Button,
  Snackbar,
  CircularProgress,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import Lottie from "lottie-react";
import messageDone from "../../animation/messagedone.json";
import contactUs from "../../animation/contact us.json";

import MailIcon from "@mui/icons-material/Mail";
import SendIcon from "@mui/icons-material/Send";
import { useForm } from "@formspree/react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
export default function Contact() {
  const displayAnimation = useMediaQuery("(min-width:850px)");
  const [state, handleSubmit] = useForm("xvgpjbqd");
  const [succrssSnackbar, setSuccrssSnackbar] = React.useState(true);
  const [messageSent, setMessageSent] = React.useState(false);
  const lottieRef = useRef();
  const [stateSnackbar, setStateSnackbar] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "right",
  });
  console.log("state", state);

  const { vertical, horizontal, open } = stateSnackbar;

  const handleClick = (newState) => () => {
    setStateSnackbar({ ...newState, open: true });
  };

  const handleClose = () => {
    setStateSnackbar({ ...stateSnackbar, open: false });
  };

  const theme = useTheme();

  const validationSchema = Yup.object({
    contact_email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .required("Message is required")
      .min(10, "Message must be at least 10 characters"),
  });

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.7);
    }
  }, []);

  return (
    <Box>
      <Box sx={{ width: 500 }}>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{ vertical, horizontal }}
        >
          <Alert
            onClose={handleClose}
            severity={succrssSnackbar ? "success" : "error"}
            variant="standard"
            sx={{ width: "100%" }}
          >
            {succrssSnackbar
              ? "Your message has been sent successfully."
              : "sorry... Your message was not sent."}
          </Alert>
        </Snackbar>
      </Box>

      <Grid container spacing={2} alignItems={"center"}>
        <Grid item xs={12} lg={7} sm={displayAnimation ? 7 : 12}>
          <Stack direction={"row"} alignItems={"center"}>
            <MailIcon
              fontSize="large"
              sx={{ color: theme.palette.text.primary, mr: 1 }}
            />
            <Typography
              variant="h4"
              fontWeight={"bold"}
              sx={{ color: theme.palette.text.primary }}
            >
              Contact us
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            sx={{
              my: 2,
              color: theme.palette.text.secondary,
              letterSpacing: "1px",
              marginLeft: !displayAnimation ? "10px" : undefined,
            }}
          >
            Contact us for more information and Get notified when I publish
            something new.
          </Typography>

          <Formik
            initialValues={{ contact_email: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              handleSubmit(values)
                .then(() => {
                  // إذا تم الإرسال بنجاح
                  setSuccrssSnackbar(true);
                  setMessageSent(true);
                  setSubmitting(false);
                  resetForm();
                  handleClick({ vertical: "top", horizontal: "right" })();
                })
                .catch((error) => {
                  // إذا حدث خطأ
                  setSubmitting(false);
                  setSuccrssSnackbar(false);
                  setMessageSent(false);
                  console.error("Error submitting the form: ", error);
                  handleClick({ vertical: "top", horizontal: "right" })();
                });
            }}
          >
            {({ isSubmitting, isValid, dirty }) => (
              <Form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  marginTop: "24px",
                  width: displayAnimation ? "70%" : "95%",
                  marginLeft: !displayAnimation ? "auto" : undefined,
                  marginRight: !displayAnimation ? "auto" : undefined,
                }}
              >
                <Field
                  as={TextField}
                  id="filled-basic"
                  label="Email"
                  variant="filled"
                  name="contact_email"
                  sx={{
                    ".MuiInputBase-root": {
                      backgroundColor:
                        theme.palette.mode === "dark"
                          ? "rgba(255, 255, 255, 0.03)"
                          : "rgb(0 0 0 / 3%)",
                    },
                    ".MuiFormLabel-root": {
                      color: "rgb(20 184 166) !important",
                    },
                  }}
                  InputProps={{
                    sx: {
                      "::after": {
                        borderBottom: "2px solid rgb(20 184 166) !important",
                      },
                    },
                  }}
                />
                <ErrorMessage
                  name="contact_email"
                  component="div"
                  style={{ color: "red" }}
                />

                <Field
                  as={TextField}
                  id="filled-multiline-static"
                  label="Your Message"
                  multiline
                  rows={4}
                  variant="filled"
                  name="message"
                  sx={{
                    ".MuiFormLabel-root": {
                      color: "rgb(20 184 166) !important",
                    },
                    ".MuiInputBase-root": {
                      backgroundColor:
                        theme.palette.mode === "dark"
                          ? "rgba(255, 255, 255, 0.03)"
                          : "rgb(0 0 0 / 3%)",
                    },
                  }}
                  InputProps={{
                    sx: {
                      "::after": {
                        borderBottom: "2px solid rgb(20 184 166) !important",
                      },
                    },
                  }}
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  style={{ color: "red" }}
                />

                <Box textAlign={"end"}>
                  <Button
                    type="submit"
                    disabled={isSubmitting || !isValid || !dirty}
                    variant="outlined"
                    sx={{
                      borderColor: "rgb(20 184 166)",
                      color: "rgb(20 184 166)",
                    }}
                    endIcon={
                      isSubmitting ? (
                        <CircularProgress
                          size={20}
                          sx={{ color: "rgb(20 184 166)" }}
                        />
                      ) : (
                        <SendIcon />
                      )
                    }
                  >
                    {isSubmitting ? "Sending..." : "Send"}
                  </Button>
                </Box>
                {messageSent && (
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Lottie
                      style={{ height: 35, marginRight: 3 }}
                      animationData={messageDone}
                      loop={false}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        letterSpacing: "0.8px",
                        fontSize: {
                          lg: "1rem",
                          md: "0.9rem",
                          sm: "0.8rem",
                          xs: "0.8rem",
                        },
                      }}
                    >
                      Your message has been sent successfully.
                    </Typography>
                  </Box>
                )}
              </Form>
            )}
          </Formik>
        </Grid>

        {displayAnimation && (
          <Grid item xs={12} lg={5} sm={5}>
            <Lottie
              style={{ height: "85%", width: "85%" }}
              animationData={contactUs}
              lottieRef={lottieRef}
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
