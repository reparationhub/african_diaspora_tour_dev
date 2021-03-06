import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PageHead from "components/PageHead";
import { Box, makeStyles } from "@material-ui/core";
import Menu from "components/Menu";
import Map from "components/Map";

export default function Home() {
  const classes = useStyles();
  const { mapInitialState } = useSelector((state) => state);
  const [mapState] = useState(mapInitialState);

  return (
    <div>
      <PageHead />
      <main>
        <Box className={classes.mainView}>
          <Map {...{ mapState }} />
          <Menu />
        </Box>
      </main>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  mainView: {
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    position: "relative",
  },
}));
