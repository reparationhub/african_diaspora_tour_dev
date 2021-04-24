import { Box, makeStyles, Dialog } from "@material-ui/core";
import { CloseOutlined } from "@material-ui/icons";
import { funFacts } from "states/data/funFacts";

export default function DarkStoryPopup({ open, handleDialog, darkStory }) {
  const classes = useStyles();

  return (
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
    fontFamily: "Special Elite",
    lineHeight: 1.4,
    fontSize: 18,
    fontWeight: 600,
    color: "#763f2f",
  },
}));
