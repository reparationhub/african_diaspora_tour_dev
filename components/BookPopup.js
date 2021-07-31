import { Box, makeStyles, Dialog } from "@material-ui/core";
import { CloseOutlined } from "@material-ui/icons";
import { funFacts } from "states/data/funFacts";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function BookPopup({ open, handleDialog, book }) {
  const classes = useStyles();
  const [highlight, setHighlight] = useState(false);

  return (
    <>
      <Dialog
        className={clsx(
          classes.dialog,
          highlight ? classes.highlightDialog : ""
        )}
        open={open}
        transitionDuration={{
          enter: 100,
          exit: 100,
        }}
      >
        <img className={classes.dialogBg} src={book.bookImage} alt="" />
        <Box className={classes.dialogContent} p={6}>
          <Box className={classes.dialogCloseButton} onClick={handleDialog}>
            {/* <CloseOutlined className={classes.closeIcon} /> */}
          </Box>
          <Box className={classes.bookPage}>
            <h4 className={classes.dialogTitle}>{book.title}</h4>
            <h5 className={classes.dialogText}>{book.description}</h5>
          </Box>
        </Box>
      </Dialog>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  bookPage: {
    // backgroundColor: "rgba(0,0,0,0.3)",
    width: 390,
    height: "90%",
    marginLeft: 150,
    marginTop: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  dialog: {
    zIndex: 30,

    "& .MuiDialog-paper": {
      backgroundColor: "transparent",
      boxShadow: "none",
      position: "relative",
      maxWidth: 1200,
      width: 1200,
    },
  },
  dialogBg: {
    width: "100%",
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
    top: 60,
    right: 65,
    zIndex: 35,
    cursor: "pointer",
    width: 40,
    height: 40,
    backgroundColor: "transparent",
  },
  closeIcon: {
    color: "#663919",
    fontSize: 32,
  },
  dialogTitle: {
    // position: "absolute",
    fontFamily: "Special Elite",
    lineHeight: 1.2,
    fontSize: 20,
    fontWeight: 700,
    textDecoration: "underline",
    color: "#763f2f",
    marginBottom: 15,
    width: "100%",
    textAlign: "center",
  },
  dialogText: {
    // position: "absolute",
    fontFamily: "Special Elite",
    lineHeight: 1.2,
    fontSize: 14,
    fontWeight: 600,
    color: "#763f2f",
    margin: 0,
    width: "100%",
    textAlign: "center",
  },

  highlightImage: {
    position: "absolute",
    top: 50,
    left: 1060,
    zIndex: 999,

    "& img": {
      border: "2px solid #CEBE34",
    },
  },

  highlightDialog: {
    "& .MuiDialog-paperScrollPaper": {
      left: -450,
      top: 150,
    },
  },
}));
