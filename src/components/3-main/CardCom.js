import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { IconButton, Stack, Tooltip } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import { motion } from "framer-motion";

export default function CardCom({ project }) {
  return (
    <Card
      component={motion.div}
      layout
      initial={{ transform: "scale(0)" }}
      animate={{ transform: "scale(1)" }}
      exit={{ opacity: 0 }}
      whileHover={{
        scale: 1.01,
        rotate: -1,
        boxShadow: "0px 0px 20px rgb(20 184 166)",
      }}
      transition={{ duration: 2, type: "spring", stiffness: 60 }}
      sx={{
        width: 285,
        border: "2px solid transparent",
        transition: "0.3s",
        cursor: "pointer",
        padding: 1,
        "&:hover": {
          borderColor: "rgb(20 184 166)",
          rotate: "1deg",
        },
      }}
    >
      <CardMedia
        component="img"
        height="160"
        image={project.image}
        alt="green iguana"
        loading="lazy"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {project.description.slice(0, 150)} .......
        </Typography>
      </CardContent>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        gap={1.5}
        my={1.4}
      >
        {project.tech.map((img, index) => {
          return <img key={index} src={img} alt="" width={"30px"} />;
        })}
      </Stack>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Stack direction={"row"}>
          {project.demo && (
            <Tooltip title="demo">
              <IconButton
                aria-label="add to shopping cart"
                component={"a"}
                target="_blank"
                href={project.demo}
                sx={{
                  opacity: "0.6",
                  transition: "0.3s",
                  "&:hover": {
                    opacity: "1",
                  },
                }}
              >
                <LinkIcon />
              </IconButton>
            </Tooltip>
          )}
          <Tooltip title="repo">
            <IconButton
              component={"a"}
              target="_blank"
              href={project.repo}
              aria-label="add to shopping cart"
              sx={{
                opacity: "0.6",
                transition: "0.3s",
                "&:hover": {
                  opacity: "1",
                },
              }}
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>
        </Stack>
        {project.video && (
          <Tooltip title="LinkedIn video">
            <Button
              component={"a"}
              target="_blank"
              href={project.video}
              sx={{ color: "rgb(20 184 166)" }}
              size="small"
              endIcon={<OndemandVideoIcon />}
            >
              Show video
            </Button>
          </Tooltip>
        )}
      </CardActions>
    </Card>
  );
}
