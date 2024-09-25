import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { ModeChange } from "./context/ModeContext";
import Website from "./website/Website";
import AboutPage from "./Pages/AboutPage";
import SkillsPage from "./Pages/SkillsPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ContactPage from "./Pages/ContactPage";

function App() {
  //default mode is light
  const mode = React.useContext(ModeChange);
  const darkTheme = createTheme({
    palette: {
      mode: mode.mode,
      bodyBackground: {
        light: "rgb(250,250,250)",
        dark: "#000",
      },

      mainBackground: {
        light: "#FFF",
        dark: "#18181B",
      },
    },
  });
  return (
    <div className="App" style={{ width: "100%", height: "100vh" }}>
      <ThemeProvider theme={darkTheme}>
        <Routes>
          <Route element={<Website />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/experience" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
