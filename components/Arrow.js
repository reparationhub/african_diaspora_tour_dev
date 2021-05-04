import { useEffect, useState } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";

export default function Arrow({ arrow }) {
  const classes = useStyles();
  const { image, position, rotate } = arrow;

  return (
    <Box
      className={clsx(classes.arrowWrapper, "map-arrow")}
      style={{
        top: position.y,
        left: position.x,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <img src={image} alt="" />
      <Typography variant="h5" className={classes.text}>
        Click Here First
      </Typography>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  arrowWrapper: {
    position: "absolute",
    zIndex: 15,

    "& img": {
      width: 250,
    },
  },
  text: {
    position: "absolute",
    top: 55,
    left: 25,
    color: "#763f2f",
    fontFamily: "Poppins",
    fontSize: 24,
    fontWeight: 800,
  },
}));
