import {
  Box,
  Container,
  CssBaseline,
  useTheme,
  Typography,
} from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import useMediaQuery from "@mui/material/useMediaQuery";
import SocialLinksCom from "../components/SocialLinksCom";
import { motion } from "framer-motion";
export default function AboutPage() {
  const hideShape = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Container
        sx={{
          backgroundColor: theme.palette.mainBackground[theme.palette.mode],
          py: 5,
        }}
      >
        <CssBaseline />

        <Typography
          variant="h4"
          textAlign={"center"}
          fontWeight={"bold"}
          color="rgb(20 184 166)"
        >
          About Me
        </Typography>
        <Grid container mt={5} alignItems={"center"} justifyContent="center">
          <Grid
            size={{ xs: 12, md: 6, lg: 6 }}
            textAlign={"center"}
            position={"relative"}
          >
            {hideShape && (
              <Box
                sx={{
                  position: "absolute",
                  top: "25%",
                  left: "25%",
                  transform: "translate(-50%, -50%)",
                  width: "300px",
                  height: "300px",
                  backgroundColor:
                    theme.palette.mode === "light"
                      ? "rgb(19, 155, 144, 0.2)"
                      : "rgb(19, 155, 144, 0.4)",
                  borderRadius: "50%",
                  zIndex: 0,
                }}
              />
            )}
            <img
              src={require("../Assets/me.png")}
              alt="Ahmed Shaban Gamhody"
              loading="lazy"
              style={{
                maxWidth: "100%",
                width: "390px",
                borderRadius: "12px",
                position: "relative",
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 6 }}>
            <Typography
              variant="body1"
              fontSize={{ lg: "18px", md: "16px", sm: "16px", xs: "16px" }}
              mt={3}
              textAlign={!hideShape ? "center" : "start"}
              letterSpacing={"0.5px"}
            >
              Hello, I'm Ahmed Shaban Gamhody, a passionate Front-End Developer
              with over one years of experience crafting visually appealing,
              responsive, and user-friendly web applications. Currently studying
              at the Faculty of Computers and Artificial Intelligence in the IT
              Department, I have honed my skills in modern web technologies.
            </Typography>
            <Typography
              variant="body1"
              mt={3}
              fontSize={{ lg: "18px", md: "16px", sm: "15px", xs: "15px" }}
              textAlign={!hideShape ? "center" : "start"}
              letterSpacing={"0.5px"}
            >
              I thrive on solving complex problems and constantly push myself to
              learn new tools and techniques. My goal is to build innovative and
              efficient web solutions that not only meet but exceed user
              expectations. When I'm not coding, I enjoy exploring the latest
              trends in technology and constantly improving my expertise in
              front-end development.
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4 }} textAlign={"center"}>
          <SocialLinksCom />
        </Box>
      </Container>
    </motion.div>
  );
}
