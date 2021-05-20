import { useEffect } from "react";
import { Box, makeStyles } from "@material-ui/core";
import { PlayArrow } from "@material-ui/icons";
import clsx from "clsx";

export default function StorySlide({ slide, moveSlide, slideNavNumbers }) {
  const classes = useStyles();
  const { description, image } = slide;
  const { slideIndex, slideCount } = slideNavNumbers;

  return (
    <Box
      className={clsx(
        classes.slideWrapper,
        slide.slidePosition && slide.slidePosition === "left"
          ? classes.left
          : classes.right
      )}
    >
      <Box p={4}>
        <Box className={classes.slideImage}>
          <img src={image} alt="" />
        </Box>
        <Box className={classes.slideDescription} mt={2}>
          {description}
        </Box>
        <Box className={classes.slideAction} mt={2}>
          <Box
            className={clsx(
              classes.actionButton,
              slideIndex === 1 ? "disabled" : ""
            )}
            onClick={() => moveSlide("previous")}
          >
            <span>
              <PlayArrow className={classes.actionIconLeft} />
            </span>
            <span>Previous</span>
          </Box>

          <Box
            className={classes.slideNumbers}
            onClick={() => moveSlide("previous")}
          >
            <span>{slideIndex}</span>
            <span style={{ marginLeft: 4, marginRight: 4 }}>of</span>
            <span>{slideCount}</span>
          </Box>

          <Box
            className={classes.actionButton}
            onClick={() => moveSlide("next")}
          >
            <span>Next</span>
            <span>
              <PlayArrow className={classes.actionIconRight} />
            </span>
          </Box>
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
    backgroundColor: "rgba(255,215,83,.6)",
    width: 450,
    borderRadius: 40,
    transition: "all 0.3s ease",
  },
  left: {
    left: 15,
  },
  right: {
    right: 15,
  },
  slideDescription: {
    lineHeight: 1.5,
    fontSize: 16,
    fontWeight: 700,
    textAlign: "justify",
    // maxHeight: 250,
    // overflowY: "scroll",
    //padding: 15,
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
    display: "flex",
    justifyContent: "center",
    "& img": {
      borderRadius: 60,
      width: "100%",
      maxHeight: 300,
    },
  },
}));
