import { useEffect } from "react";
import { Box, makeStyles } from "@material-ui/core";
import { PlayArrow } from "@material-ui/icons";

export default function IntroSlide({ slide, moveSlide }) {
  const classes = useStyles();
  const { description } = slide;

  return (
    <Box className={classes.slideWrapper}>
      <Box p={3}>
        <Box className={classes.slideDescription}>{description}</Box>
        <Box className={classes.slideAction} mt={1}>
          <Box
            className={classes.actionButton}
            onClick={() => moveSlide("next")}
          >
            <span>Go</span>
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
    right: 15,
    backgroundColor: "rgba(255,215,83,.6)",
    width: 350,
    borderRadius: 40,
    transition: "all 0.3s ease",
  },
  slideDescription: {
    lineHeight: 1.5,
    fontSize: 16,
    fontWeight: 700,
  },

  slideAction: {
    display: "flex",
    justifyContent: "flex-end",
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
    fontFamily: "Poppins",
  },
  actionIconRight: {
    fontSize: 32,
    marginBottom: "-3px",
  },
}));
