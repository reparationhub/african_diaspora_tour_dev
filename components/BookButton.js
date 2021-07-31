import React, { useState } from "react";
import { Box, makeStyles } from "@material-ui/core";
import BookPopup from "./BookPopup";

export default function Book({ book }) {
  const styles = useStyles();
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
      <BookPopup {...{ open, book, handleDialog }} />
      <Box
        className={styles.bookButton}
        style={{
          left: book.position.x,
          top: book.position.y,
        }}
        onClick={handleClick}
      >
        <img src={book.iconImage} />
      </Box>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  bookButton: {
    position: "absolute",
    zIndex: "9999",
    cursor: "pointer",
    transition: "all 0.3s ease",

    "& img": {
      width: 45,
    },

    "&:hover": {
      transform: "scale(1.2)",
    },
  },
}));
