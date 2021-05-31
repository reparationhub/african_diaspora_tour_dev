import { Box, makeStyles, Dialog } from "@material-ui/core";
import { CloseOutlined } from "@material-ui/icons";
import { funFacts } from "states/data/funFacts";
import { useEffect, useState } from "react";

export default function DarkStoryPopup({ open, handleDialog, darkStory }) {
  const classes = useStyles();
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    if (darkStory.name === "ukfrance") {
      setHighlight(true);
    } else {
      setHighlight(false);
    }
  }, [darkStory]);

  return (
    <>
      {highlight && open && (
        <Box className={classes.highlightImage}>
          <img
            className={classes.dialogBg}
            src="/assets/images/ukfrancehighlight.png"
            alt=""
          />
        </Box>
      )}

      <Dialog
        className={classes.dialog}
        open={open}
        transitionDuration={{
          enter: 100,
          exit: 100,
        }}
      >
        <img
          className={classes.dialogBg}
          src="/assets/images/dark-popup-bg.png"
          alt=""
        />
        <Box className={classes.dialogContent} p={6}>
          <Box className={classes.dialogCloseButton} onClick={handleDialog}>
            <CloseOutlined className={classes.closeIcon} />
          </Box>

          <h5 className={classes.dialogText}>{darkStory.description}</h5>
        </Box>
      </Dialog>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  dialog: {
    zIndex: 30,

    "& .MuiDialog-paper": {
      backgroundColor: "transparent",
      boxShadow: "none",
      position: "relative",
      width: 350,
    },
  },
  dialogContent: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 31,
    width: "100%",
    height: "100%",
  },
  dialogCloseButton: {
    position: "absolute",
    top: 40,
    right: 40,
    zIndex: 35,
    cursor: "pointer",
  },
  closeIcon: {
    color: "#663919",
    fontSize: 32,
  },
  dialogText: {
    position: "absolute",
    fontFamily: "Special Elite",
    lineHeight: 1.4,
    fontSize: 18,
    fontWeight: 600,
    color: "#763f2f",
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%)`,
    margin: 0,
    width: "100%",
    padding: 60,
    textAlign: "center",
  },

  highlightImage: {
    position: "absolute",
    top: 80,
    left: 800,
    zIndex: 999,

    "& img": {
      border: "2px solid #CEBE34",
    },
  },
}));
