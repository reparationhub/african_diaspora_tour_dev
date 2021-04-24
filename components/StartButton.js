import { useEffect } from "react";
import { Button, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { useRouter } from "next/router";

export default function StartButton({ startButton }) {
  const classes = useStyles();
  const { position, name, tourId } = startButton;
  const router = useRouter();

  const moveToSlides = () => {
    router.push(`/slides?tourId=${tourId}`);
  };

  return (
    <Button
      variant="contained"
      size="large"
      className={clsx(classes.startButton, "start-button")}
      style={{
        top: position.y,
        left: position.x,
      }}
      onClick={moveToSlides}
    >
      {name}
    </Button>
  );
}

const useStyles = makeStyles((theme) => ({
  startButton: {
    position: "absolute",
    zIndex: 30,
    backgroundColor: "#ffd753",
    borderRadius: 30,
    padding: "15px 30px",
    textTransform: "capitalize",
    fontFamily: "Poppins",
    fontSize: 18,
    fontWeight: 700,

    "&:hover": {
      backgroundColor: "#997500",
      color: "white",
    },
  },
}));
