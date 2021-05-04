import { useEffect, useState } from "react";
import PageHead from "components/PageHead";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Box, makeStyles } from "@material-ui/core";
import Map from "components/Map";
import TourBrief from "components/TourBrief";
import Location from "components/Location";
import { v4 as uuid } from "uuid";
import FuncFactButton from "components/FunFactButton";
import DarkStoryButton from "components/DarkStoryButton";
import StartButton from "components/StartButton";
import BackButton from "components/BackButton";
import Arrow from "components/Arrow";

export default function TourStart() {
  const classes = useStyles();
  const router = useRouter();
  const { tours, mapInitialState } = useSelector((state) => state);
  const globalState = useSelector((state) => state);
  const [activeLocations, setActiveLocations] = useState([]);
  const [activeFunFacts, setActiveFunFacts] = useState([]);
  const [mapState, setMapState] = useState(mapInitialState);
  const [activeDarkStories, setActiveDarkStories] = useState([]);
  const [activeStartButtons, setActiveStartButtons] = useState([]);
  const [activeArrows, setActiveArrows] = useState([]);

  // Utility function to update local states according to the tour cnfiguration
  const findAndSetLocalState = (property) => {
    let tourId = router.query.tourId;
    if (tourId && globalState) {
      let activeIds = tours.find((tour) => tour.id == tourId)[property];
      let active = [];

      for (let id of activeIds) {
        let data = globalState[property].find((location) => location.id === id);
        active.push(data);
      }

      if (property === "locations") setActiveLocations(active);
      if (property === "funFacts") setActiveFunFacts(active);
      if (property === "darkStories") setActiveDarkStories(active);
      if (property === "startButtons") setActiveStartButtons(active);
      if (property === "arrows") setActiveArrows(active);
    }
  };

  // Running the local state update utility function in useEffect
  useEffect(() => {
    findAndSetLocalState("locations");
    findAndSetLocalState("funFacts");
    findAndSetLocalState("darkStories");
    findAndSetLocalState("startButtons");
    findAndSetLocalState("arrows");
  }, [router, globalState]);

  // Transition effect for map
  useEffect(() => {
    let tourId = router.query.tourId;
    if (tourId && globalState) {
      let { mapState } = tours.find((tour) => tour.id == tourId);
      setTimeout(function () {
        setMapState({ ...mapState });
      }, 100);
    }
  }, [router, globalState]);

  return (
    <div>
      <PageHead />
      <main>
        <Box className={classes.mainView}>
          <Map {...{ mapState }}>
            {/* Rendering locations  */}
            {activeLocations.length > 0 &&
              activeLocations.map((location) => (
                <Location key={uuid()} {...{ location }} />
              ))}

            {/* Rendering fun facts */}
            {activeFunFacts.length > 0 &&
              activeFunFacts.map((funFact) => (
                <FuncFactButton key={uuid()} {...{ funFact }} />
              ))}

            {/* Rendering dark stories */}
            {activeDarkStories.length > 0 &&
              activeDarkStories.map((darkStory) => (
                <DarkStoryButton key={uuid()} {...{ darkStory }} />
              ))}

            {/* Rendering start buttons */}
            {activeStartButtons.length > 0 &&
              activeStartButtons.map((startButton) => (
                <StartButton key={uuid()} {...{ startButton }} />
              ))}
            {/* Rendering arrows */}
            {activeArrows.length > 0 &&
              activeArrows.map((arrow) => (
                <Arrow key={uuid()} {...{ arrow }} />
              ))}
          </Map>
          <BackButton />
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
