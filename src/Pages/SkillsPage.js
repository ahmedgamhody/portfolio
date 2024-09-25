import {
  Container,
  CssBaseline,
  useTheme,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import html from "../Assets/HTML5.png";
import css from "../Assets/CSS3.png";
import sass from "../Assets/Sass.png";
import bootStrap from "../Assets/Bootstrap.png";
import Tailwind from "../Assets/Tailwind CSS.png";
import JavaScript from "../Assets/JavaScript.png";
import react from "../Assets/React.png";
import ReactbootStrap from "../Assets/React Bootstrap.png";
import ReactRouter from "../Assets/react-router.png";
import Redux from "../Assets/Redux.png";
import MaterialUi from "../Assets/Material UI.png";
import Git from "../Assets/Git.png";
import GitHub from "../Assets/GitHub.png";
import CleanCode from "../Assets/clean code.png";
import jquery from "../Assets/jQuery.png";
import TypeScript from "../Assets/TypeScript.png";
import PromptEngineer from "../Assets/chatgpt.png";
import json from "../Assets/JSON.png";
import swiper from "../Assets/swiper.png";
import Rapid from "../Assets/Rapid API.png";
//
import VS from "../Assets/Visual Studio Code (VS Code).png";
import npm from "../Assets/NPM.png";
import ChatGPT from "../Assets/chatgpt.png";
import GitHubCodespaces from "../Assets/GitHub Codespaces.png";
import Postman from "../Assets/Postman.png";
import Canva from "../Assets/Canva.png";
import Figma from "../Assets/Figma.png";
import Vite from "../Assets/Vite.js.png";
import { motion } from "framer-motion";

export default function SkillsPage() {
  const theme = useTheme();
  const mySkills = [
    {
      title: "HTML",
      img: html,
    },

    {
      title: "CSS",
      img: css,
    },
    {
      title: "Bootstrap",
      img: bootStrap,
    },
    {
      title: "Tailwind CSS",
      img: Tailwind,
    },
    {
      title: "JavaScript",
      img: JavaScript,
    },
    {
      title: "React",
      img: react,
    },
    {
      title: "React Bootstrap",
      img: ReactbootStrap,
    },
    {
      title: "React Router",
      img: ReactRouter,
    },
    {
      title: "Redux",
      img: Redux,
    },
    {
      title: "Material UI",
      img: MaterialUi,
    },
    {
      title: "Git",
      img: Git,
    },
    {
      title: "GitHub",
      img: GitHub,
    },

    {
      title: "SASS",
      img: sass,
    },
    {
      title: "Clean Code",
      img: CleanCode,
    },
    {
      title: "jQuery",
      img: jquery,
    },
    {
      title: "TypeScript",
      img: TypeScript,
    },
    {
      title: "Prompt Engineerer",
      img: PromptEngineer,
    },
    {
      title: "JSON Server",
      img: json,
    },
    {
      title: "Swiper js",
      img: swiper,
    },
  ];
  const myTools = [
    {
      title: "VS Code",
      img: VS,
    },
    {
      title: "NPM",
      img: npm,
    },
    {
      title: "ChatGPT",
      img: ChatGPT,
    },
    {
      title: "GitHub Desktop",
      img: GitHubCodespaces,
    },
    {
      title: "Postman",
      img: Postman,
    },

    {
      title: "Canva",
      img: Canva,
    },
    {
      title: "Figma",
      img: Figma,
    },
    {
      title: "Vite",
      img: Vite,
    },
    {
      title: "Rapid's API",
      img: Rapid,
    },
  ];
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
          letterSpacing={"0.6px"}
        >
          Experience
        </Typography>
        <Grid container mt={5} alignItems={"start"} spacing={2}>
          <Grid size={{ xs: 12, md: 12, lg: 12 }}>
            <Typography
              variant="h5"
              mx={"auto"}
              fontWeight={"bold"}
              letterSpacing={"0.6px"}
              borderBottom={"1px solid rgb(20 184 166)"}
              width={"fit-content"}
              pb={0.8}
            >
              Skills
            </Typography>
            <Box
              display={"flex"}
              flexWrap={"wrap"}
              gap={3}
              justifyContent={"center"}
              mt={4}
            >
              {mySkills.map((skill, index) => (
                <Box
                  key={index}
                  sx={{
                    textAlign: "center",
                    mb: 2,
                    transition: "0.3s",

                    p: 0.8,
                    borderRadius: "12px",
                  }}
                >
                  <img
                    src={skill.img}
                    alt={skill.title}
                    width={55}
                    height={55}
                    style={{
                      objectFit: "cover",
                      cursor: "pointer",
                      backgroundColor: "white",
                      padding: "5px",
                      borderRadius: "12px",
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{ color: theme.palette.text.secondary }}
                  >
                    {skill.title}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
          <Divider
            sx={{ my: 2, width: "100%", backgroundColor: "rgb(20, 184, 166)" }}
          />

          <Grid size={{ xs: 12, md: 12, lg: 12 }}>
            <Typography
              variant="h5"
              textAlign={"center"}
              fontWeight={"bold"}
              letterSpacing={"0.6px"}
              mx={"auto"}
              borderBottom={"1px solid rgb(20 184 166)"}
              width={"fit-content"}
              pb={0.8}
            >
              Tools
            </Typography>
            <Box
              display={"flex"}
              flexWrap={"wrap"}
              gap={3}
              justifyContent={"center"}
              mt={4}
            >
              {myTools.map((tool, index) => (
                <Box
                  key={index}
                  sx={{
                    textAlign: "center",
                    mb: 2,
                    transition: "0.3s",

                    p: 0.8,
                    borderRadius: "12px",
                  }}
                >
                  <img
                    src={tool.img}
                    alt={tool.title}
                    width={55}
                    height={55}
                    style={{
                      objectFit: "cover",
                      cursor: "pointer",
                      backgroundColor: "white",
                      padding: "5px",
                      borderRadius: "12px",
                    }}
                  />
                  <Typography
                    sx={{ color: theme.palette.text.secondary }}
                    variant="body1"
                  >
                    {tool.title}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
}
