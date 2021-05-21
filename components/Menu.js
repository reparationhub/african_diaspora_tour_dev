import { Box, makeStyles, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Menu() {
  const classes = useStyles();
  const router = useRouter();
  const { tours } = useSelector((state) => state);
  const [loadingId, setLoadingId] = useState(null);

  const moveToIntro = (tourId) => {
    setLoadingId(tourId);
    router.push(`/intro?tourId=${tourId}`);
  };

  return (
    <Box className={classes.menuWrapper}>
      <img src="/assets/images/popup-bg.png" />
      <Box className={classes.menuContent}>
        <h2 className={classes.menuTitle}>Welcome to African Diaspora Tour</h2>
        <h6 className={classes.menuSubtitle}>
          Select an available tour from the below options :
        </h6>
        <Box pl={2} pr={2}>
          {tours.map((tour) => (
            <Box
              mt={2}
              mb={2}
              key={uuid()}
              className={clsx(
                classes.button,
                tour.id === 2 ? "highlighted" : "",
                !tour.available ? "disableclick" : ""
              )}
              onClick={() => moveToIntro(tour.id)}
            >
              <Box className={classes.buttonTitle}>
                {tour.name}
                {tour.id === loadingId && (
                  <CircularProgress
                    size={14}
                    style={{ color: "white", marginLeft: 5 }}
                  />
                )}
              </Box>
              {!tour.available && (
                <Box className={classes.buttonSubtitle}>
                  (Not yet available)
                </Box>
              )}
              {tour.available && tour.id !== 2 && (
                <Box className={classes.buttonSubtitle}>(Available)</Box>
              )}
            </Box>
          ))}
        </Box>

        <Box textAlign="center">
          <a href="https://www.reparationhub.com" className={classes.menuLink}>
            Go To Reparation Hub Website
          </a>
        </Box>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  menuWrapper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 5,
  },

  menuContent: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    padding: "0 50px",
  },
  menuTitle: {
    fontSize: 24,
    fontWeight: 800,
    textAlign: "center",
    color: "#926430",
    lineHeight: 1.2,
    margin: 0,
  },
  menuSubtitle: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    color: "#c48b4b",
    marginTop: 5,
    marginBottom: 15,
    // textDecoration: "underline",
  },
  menuLink: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    color: "green",
    marginTop: 5,
    marginBottom: 30,
    textDecoration: "underline",
  },
  button: {
    backgroundColor: "#926430",
    padding: "15px 30px",
    width: "100%",
    textAlign: "center",
    borderRadius: 60,
    cursor: "pointer",
    transition: "all 0.1s ease-out",
    opacity: 0.4,

    "&.highlighted": {
      opacity: 1,
    },

    "&.disableclick": {
      pointerEvents: "none",
    },

    "&:hover": {
      transform: "scale(1.1)",
    },
  },

  buttonTitle: {
    fontSize: 18,
    fontWeight: 700,
    whiteSpace: "nowrap",
    color: "white",
  },
  buttonSubtitle: {
    color: "white",
    fontWeight: 600,
    fontSize: 14,
  },
}));
