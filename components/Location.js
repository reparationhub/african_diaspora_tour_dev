import { useEffect } from "react";
import { Box, makeStyles } from "@material-ui/core";
import clsx from "clsx";

export default function Location({ location, isLocationClickable, moveSlide }) {
  const classes = useStyles();
  const { image, position } = location;

  // useEffect(() => {
  //   console.log(location);
  // }, [location]);

  const handleLocationClick = () => {
    if (isLocationClickable) {
      moveSlide("next");
    } else {
      return;
    }
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
    >
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
}));
