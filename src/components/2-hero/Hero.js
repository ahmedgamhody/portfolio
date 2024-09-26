import React, { useEffect, useRef } from "react";
import {
  Box,
  useTheme,
  Typography,
  Stack,
  Tooltip,
  Button,
  useMediaQuery,
} from "@mui/material";
import CV from "../../Assets/ahmedgamhody frontend developer cv.pdf";
import Grid from "@mui/material/Grid";
import VerifiedIcon from "@mui/icons-material/Verified";
import SocialLinksCom from "../SocialLinksCom";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import heroAnimation from "../../animation/heroanimation.json";
import Lottie from "lottie-react";
export default function Hero() {
  const theme = useTheme();
  const displayAnimation = useMediaQuery("(min-width:850px)");
  const lottieRef = useRef();
  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.8);
    }
  }, []);

  return (
    <Box sx={{ flexGrow: 1, pt: { xs: 7, lg: 10, md: 10 } }}>
      <Grid container spacing={2} alignItems={"center"}>
        <Grid item xs={12} lg={7} sm={displayAnimation ? 7 : 12}>
          <Box sx={{ mb: 3 }}>
            <Tooltip title="Gamhody">
              <img
                src={require("../../Assets/main image.png")}
                alt="ahmed gamhody"
                style={{
                  maxWidth: "100%",
                  width: "95px",
                  boxShadow: "2px 2px 15px gray",
                  borderRadius: "50%",
                  border: `3px solid ${theme.palette.divider}`,
                  backgroundColor: "white",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
                loading="lazy"
              ></img>
            </Tooltip>
            <Tooltip title="Gamhody">
              <VerifiedIcon
                fontSize="small"
                sx={{ color: "#1976D2", cursor: "pointer" }}
              />
            </Tooltip>
          </Box>

          <Typography
            sx={{ fontWeight: "bold", my: 3, color: "rgb(20 184 166)" }}
            variant="h4"
          >
            Ahmed Shaban Gamhody
          </Typography>
          <Typography sx={{ fontWeight: "bold" }} variant="h5">
            IT student | Front-End Developer <br /> ( React js | Next js )
          </Typography>
          <Typography
            variant="body1"
            sx={{
              my: 3,
              color: theme.palette.text.secondary,
              letterSpacing: "1px",
            }}
          >
            Hi , I am Ahmed Shaban Gamhody , I study at the Faculty of Computers
            and Artificial Intelligence , IT Department , and I work as A
            Front-End Developer with more than one years of experience and
            dealing in the technological field.
          </Typography>
          <Stack direction={"row"} gap={1}>
            <SocialLinksCom />
          </Stack>
          <Tooltip title="Download CV">
            <Button
              component={"a"}
              variant="outlined"
              sx={{
                borderColor: "rgb(20 184 166)",
                color: "rgb(20 184 166)",
                mt: 3,
                borderRadius: 3,
                width: "200px",
                "&:hover": {
                  borderColor: "rgb(20 184 166)",
                  backgroundColor: "rgb(20 184 166)",
                  color: "white",
                },
              }}
              endIcon={<CloudDownloadIcon />}
              href={CV}
              target="_blank"
              download="Ahmed_Gamhody_FrontEnd_Developer_CV.pdf"
            >
              Download My CV
            </Button>
          </Tooltip>
        </Grid>

        <Grid item xs={12} lg={5} sm={5}>
          {displayAnimation && (
            <Lottie
              style={{ height: "85%", width: "85%" }}
              animationData={heroAnimation}
              lottieRef={lottieRef}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
