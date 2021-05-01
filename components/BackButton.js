import { useEffect, useState } from "react";
import { Box, makeStyles, Button } from "@material-ui/core";
import { useRouter } from "next/router";

export default function BackButton() {
  const classes = useStyles();
  const router = useRouter();
  const [tourId, setTourId] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    console.log(router);
    let currentPath = router.pathname;
    let tourId = router.query.tourId;
    let isButtonActive =
      currentPath.indexOf("tourstart") > 0 || currentPath.indexOf("slides") > 0;

    if (isButtonActive) {
      setIsButtonActive(true);
      setTourId(tourId);
      setCurrentPath(currentPath);
    } else {
      setIsButtonActive(false);
      setTourId("");
    }
  }, [router]);

  const goTourStart = () => {
    router.push(`/tourstart?tourId=${tourId}`);
  };
  const backToMenu = () => {
    router.push(`/`);
  };

  return (
    <>
      {isButtonActive && (
        <Box className={classes.backButton}>
          <Box className={classes.icon}>
            <img src="/assets/images/globe.png" />
          </Box>
          <Box className={classes.buttonWrapper}>
            <Button
              variant="contained"
              disableElevation
              className={classes.button}
              onClick={backToMenu}
            >
              Back to menu
            </Button>

            {currentPath.indexOf("slides") > 0 && (
              <Button
                variant="contained"
                disableElevation
                className={classes.button}
                onClick={goTourStart}
              >
                Go to tour start
              </Button>
            )}
          </Box>
        </Box>
      )}
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  backButton: {
    position: "absolute",
    bottom: 50,
    left: 100,
    width: 150,
    height: 100,
    zIndex: 999,
    cursor: "pointer",

    "&:hover": {
      "& img": {
        opacity: 1,
        transform: "scale(1.1)",
      },
      "& .MuiButtonBase-root": {
        opacity: 1,
        pointerEvents: "all",
      },
    },
  },

  icon: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "fit-content",
    height: "fit-content",
    "& img": {
      width: 64,
      opacity: "0.3",
      transition: "all 0.3s ease",
    },
  },

  buttonWrapper: {
    position: "absolute",
    bottom: "100%",
    left: "50%",
    transform: "translateX(-50%)",
    transition: "all 0.3s ease",
  },
  button: {
    width: "100%",
    padding: "6px 30px",
    marginBottom: 10,
    whiteSpace: "nowrap",
    border: "none",
    backgroundColor: "rgba(255,215,83,.4)",
    fontFamily: "Poppins",
    textTransform: "none",
    fontWeight: 600,
    transition: "all 0.3s ease",
    cursor: "pointer",
    borderRadius: 30,
    opacity: 0,
    pointerEvents: "none",
    letterSpacing: 0,

    "&:hover": {
      opacity: 1,
      backgroundColor: "#ffd753",
    },
  },
}));
