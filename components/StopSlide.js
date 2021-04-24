import { useEffect } from "react";
import { Box, makeStyles } from "@material-ui/core";
import { PlayArrow } from "@material-ui/icons";
import clsx from "clsx";

export default function StopSlide({ slide, moveSlide, slideNavNumbers }) {
  const classes = useStyles();
  const { description, title } = slide;

  return (
    <Box className={classes.slideWrapper}>
      <Box p={4}>
        <Box className={classes.stopTitle} pt={3} pb={1}>
          {title}
        </Box>
        <Box className={classes.slideDescription} mt={2}>
          {description}
        </Box>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  slideWrapper: {
    position: "absolute",
    zIndex: 10,
    bottom: 15,
    right: 15,
    backgroundColor: "rgba(255,215,83,.6)",
    width: 450,
    borderRadius: 40,
    transition: "all 0.3s ease",
  },
  slideDescription: {
    lineHeight: 1.5,
    fontSize: 16,
    fontWeight: 700,
    textAlign: "justify",

    "& .highlighted": {
      color: "#a20a0a",
      fontWeight: 800,
    },
  },

  slideAction: {
    display: "flex",
    justifyContent: "space-between",
  },

  actionButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    lineHeight: 1,
    fontSize: 16,
    fontWeight: 600,
    width: "fit-content",
    cursor: "pointer",

    "&.disabled": {
      pointerEvents: "none",
      opacity: 0.3,
    },
  },
  slideNumbers: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    lineHeight: 1,
    fontSize: 16,
    fontWeight: 700,
    width: "fit-content",
  },
  actionIconRight: {
    fontSize: 32,
    marginBottom: "-2px",
  },

  actionIconLeft: {
    fontSize: 32,
    marginBottom: "-2px",
    transform: "rotate(180deg)",
  },

  slideImage: {
    "& img": {
      borderRadius: 60,
      width: "100%",
    },
  },
  stopTitle: {
    fontWeight: 900,
    color: "#a20a0a",
    fontSize: 56,
    textAlign: "center",
  },
}));
