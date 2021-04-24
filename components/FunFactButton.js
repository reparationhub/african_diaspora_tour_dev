import { useEffect, useState } from "react";
import { Box, makeStyles } from "@material-ui/core";
import FunFactPopup from "./FunFactPopup";

export default function FunFactButton({ funFact }) {
  const classes = useStyles();
  const { position } = funFact;
  const [open, setOpen] = useState(false);

  const handleDialog = () => {
    setOpen(!open);
  };

  const handleClick = () => {
    let audio = new Audio("/assets/sounds/funfact.mp3");
    audio.play();
    handleDialog();
  };

  return (
    <>
      <FunFactPopup {...{ open, handleDialog, funFact }} />
      <Box
        className={classes.funFactButton}
        style={{
          top: position.y,
          left: position.x,
        }}
        onClick={handleClick}
      >
        <img
          className={classes.funFactIcon}
          src="/assets/images/fun-fact-icon.png"
          alt=""
        />
      </Box>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  funFactButton: {
    position: "absolute",
    zIndex: 20,
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "scale(1.3)",
    },
  },
  funFactIcon: {
    width: 32,
    filter: "drop-shadow(0 0 15px #222)",
  },
}));
