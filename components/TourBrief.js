import { Box, Typography, Button, makeStyles } from "@material-ui/core";
import { useRouter } from "next/router";

export default function TourBrief({ brief }) {
  const classes = useStyles();
  const router = useRouter();

  const moveTourStart = (tourId) => {
    router.push(`/tourstart?tourId=${tourId}`);
  };

  return (
    <Box className={classes.briefWrapper} width={969} height={645}>
      <img src="/assets/images/brief-scroll.png" />

      <Box className={classes.briefContents}>
        <Box>
          <h2 className={classes.briefTitle}>{brief.name}</h2>
        </Box>
        <Box>
          <p className={classes.briefDetails}>{brief.details}</p>
        </Box>
        <Box mt={2}>
          <Button
            className={classes.button}
            variant="contained"
            size="small"
            disableElevation
            onClick={() => moveTourStart(brief.tourId)}
          >
            Start Tour
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  briefWrapper: {
    position: "absolute",
    bottom: "0",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 10,
  },
  briefContents: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    width: "100%",
    padding: "30px 160px",
  },
  briefTitle: {
    fontFamily: "Mrs Saint Delafield",
    fontSize: 48,
    fontWeight: 100,
    letterSpacing: 3,
    margin: 0,
  },
  briefDetails: {
    fontWeight: 700,
    fontSize: 15,
    textAlign: "left",
    margin: 0,
  },
  button: {
    backgroundColor: "white",
    color: "black",
    fontFamily: "Poppins",
    textTransform: "capitalize",
    fontWeight: 700,
    borderRadius: 25,
    padding: "5px 30px",

    "&:hover": {
      backgroundColor: "#71ac1a",
    },
    "&:focus": {
      backgroundColor: "#ffd753",
      outline: "none",
    },
  },
}));
