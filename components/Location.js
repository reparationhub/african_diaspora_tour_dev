import { useEffect, useState } from "react";
import { Box, makeStyles } from "@material-ui/core";
import clsx from "clsx";

export default function Location({ location, isLocationClickable, moveSlide }) {
  const classes = useStyles();
  const { image, position } = location;
  const [audio, setAudio] = useState(new Audio(location.sound));
  // useEffect(() => {
  //   console.log(location);
  // }, [location]);

  const handleLocationClick = () => {
    audio.pause();
    audio.currentTime = 0;
    if (isLocationClickable) {
      moveSlide("next");
    } else {
      return;
    }
  };

  const playSound = () => {
    if (location.sound && !isLocationClickable) {
      audio.play();
    }
  };

  const stopSound = () => {
    audio.pause();
    audio.currentTime = 0;
  };

  return (
    <Box
      className={clsx(
        classes.locationWrapper,
        "map-location",
        location.name,
        isLocationClickable ? "location-blink" : ""
      )}
      style={{ top: position.y, left: position.x }}
      onClick={handleLocationClick}
      onMouseEnter={playSound}
      onMouseLeave={stopSound}
    >
      {location.name === "Barbary Coast" && (
        <Box className={classes.locationName}>
          <span>{location.name}</span>
        </Box>
      )}

      <img src={image} alt="" />
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  locationWrapper: {
    position: "absolute",
    zIndex: 15,
    cursor: "pointer",
  },

  locationName: {
    position: "absolute",
    width: "100%",
    height: "100%",

    "& span": {
      position: "absolute",
      top: 45,
      left: 120,
      fontSize: 16,
      fontWeight: 600,
      color: "#a20a0a",
      zIndex: 999,
    },
  },
}));
