import { Box, Stack, useTheme } from "@mui/material";
import React, { useRef, useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CardCom from "./CardCom";
import { myProject } from "../projects/Projects";
import Pagination from "@mui/material/Pagination";
export default function Main() {
  const [page, setPage] = useState(1);
  const limtePerPage = 6;
  const theme = useTheme();
  const [alignment, setAlignment] = React.useState("allProjects");
  const boxRef = useRef(null);
  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      setPage(1);
    }
  };

  const allProjectsButtons = [
    {
      title: "All Projects",
      value: "allProjects",
    },
    {
      title: "HTML & CSS",
      value: "htmlandcss",
    },
    {
      title: "JavaScript",
      value: "javascript",
    },
    {
      title: "React Js",
      value: "react",
    },
  ];

  const projectsButtons = allProjectsButtons.map((button, index) => {
    return (
      <ToggleButton
        value={button.value}
        key={index}
        sx={{
          textTransform: "capitalize",
          textAlign: "center",
          fontSize: "1.05rem",
          padding: "0.75rem 0",
          width: { lg: "10rem", md: "10rem", sm: "9rem", xs: "8.5rem" },
          borderWidth: "2px !important",
          borderRadius: "8px !important",
          color: "rgb(114,114,118)",
          marginLeft: "0 !important",
          border: `2px solid ${theme.palette.divider} !important`,
          letterSpacing: "0.7px",
          transition: "0.3s !important",
        }}
      >
        {button.title}
      </ToggleButton>
    );
  });

  //fillter for projects by stack , its come from project.js file from projects folder

  const filteredProjects =
    alignment === "allProjects"
      ? myProject
      : myProject.filter((project) => project.stack === alignment);

  // pagination opreation

  const start = limtePerPage * (page - 1);
  const end = Number(start) + Number(limtePerPage);
  const paginatedProjects = filteredProjects.slice(start, end);

  return (
    <Box ref={boxRef}>
      <Stack direction={{ sm: "column", lg: "row", md: "row" }} gap={3}>
        <Box>
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            //to color selected
            sx={{
              ".Mui-selected": {
                border: "2px solid rgb(20 184 166) !important",
                color: `${theme.palette.text.primary} !important`,
                borderRadius: "8px !important",
                backgroundColor: "rgb(20 184 166 / 5%) !important",
              },
              display: "flex",
              flexDirection: { lg: "column", md: "column", sm: "row" },
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 1.3,
              transition: "0.3s !important",
            }}
          >
            {projectsButtons}
          </ToggleButtonGroup>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            gap: 4,
          }}
        >
          {paginatedProjects.map((project, index) => (
            <CardCom key={index} project={project} />
          ))}
        </Box>
      </Stack>
      <Box display={"flex"} justifyContent={"center"} mt={5}>
        <Pagination
          count={Math.ceil(filteredProjects.length / limtePerPage)}
          page={page}
          onChange={(event, value) => {
            setPage(value);
            boxRef.current.scrollIntoView({
              behavior: "smooth",
            });
          }}
          sx={{
            "& .MuiPaginationItem-root": {
              "&.Mui-selected": {
                backgroundColor: "rgb(20 184 166)",
                color: "white",
              },
              "&.Mui-selected:hover": {
                backgroundColor: "rgb(17 138 124)",
              },
              "&:hover": {
                backgroundColor: "rgba(20, 184, 166, 0.2)",
              },
            },
          }}
        />
      </Box>
    </Box>
  );
}
