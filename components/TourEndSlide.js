import { Box, makeStyles, Button } from "@material-ui/core";
export default function TourEnd() {
  const classes = useStyles();

  return (
    <Box className={classes.tourEndWrapper}>
      <img src="/assets/images/tour-end-bg.png" alt="" />
      <Box className={classes.tourEndContent} p={16}>
        <Box textAlign="center">
          <img
            className={classes.finishFlag}
            src="/assets/images/finish-flag.png"
            alt=""
          />
        </Box>
        <Box mb={2}>
          <h3 className={classes.title}>
            Congratulation, you have finished the tour{" "}
          </h3>
        </Box>
        <Box mb={3}>
          <h6 className={classes.subtitle}>Please click the below button</h6>
        </Box>
        <Box display="flex" justifyContent="center">
          <a href="https://www.reparationhub.com/end-of-tour/" className={classes.button}>
            Click this button
          </a>
        </Box>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  tourEndWrapper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 10,
  },

  tourEndContent: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
  },
  finishFlag: {
    width: 180,
  },
  title: {
    fontFamily: "Poppins",
    fontWeight: 800,
    fontSize: 22,
    textAlign: "center",
    lineHeight: 1.3,
    color: "#926430",
    margin: 0,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 400,
    textAlign: "center",
    color: "#c48b4b",
    textDecoration: "underline",
    fontFamily: "Poppins",
    margin: 0,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 30px",
    color: "white",
    borderRadius: "60px",
    transition: "all 0.3s ease",
    fontFamily: "Poppins",
    fontWeight: 600,
    backgroundColor: "#926430",
    width: 200,
    whiteSpace: "nowrap",

    "&:hover": {
      backgroundColor: "#a57136",
    },
  },
}));
