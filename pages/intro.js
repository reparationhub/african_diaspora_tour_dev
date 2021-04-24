import { useEffect, useState } from "react";
import PageHead from "components/PageHead";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Box, makeStyles } from "@material-ui/core";
import Map from "components/Map";
import TourBrief from "components/TourBrief";

export default function Intro() {
  const classes = useStyles();
  const router = useRouter();
  const { tourBriefs } = useSelector((state) => state);
  const [brief, setBrief] = useState(null);
  const { mapInitialState } = useSelector((state) => state);
  const [mapState] = useState(mapInitialState);

  useEffect(() => {
    let tourId = router.query.tourId;
    let brief = tourBriefs.find((brief) => brief.tourId == tourId);
    setBrief(brief);
  }, [router]);

  return (
    <div>
      <PageHead />
      <main>
        <Box className={classes.mainView}>
          <Map {...{ mapState }} />
          {brief && <TourBrief {...{ brief }} />}
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
