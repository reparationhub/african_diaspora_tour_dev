import { useEffect, useState } from "react";
import PageHead from "components/PageHead";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Box, makeStyles } from "@material-ui/core";
import Map from "components/Map";
import Location from "components/Location";
import { v4 as uuid } from "uuid";
import FuncFactButton from "components/FunFactButton";
import DarkStoryButton from "components/DarkStoryButton";
import StartButton from "components/StartButton";
import Flag from "components/Flag";
import IntroSlide from "components/IntroSlide";
import StorySlide from "components/StorySlide";
import StopSlide from "components/StopSlide";
import TourEndSlide from "components/TourEndSlide";
import BackButton from "components/BackButton";

export default function TourStart() {
  const classes = useStyles();
  const router = useRouter();
  const { tours, mapInitialState } = useSelector((state) => state);
  const globalState = useSelector((state) => state);
  const [activeLocations, setActiveLocations] = useState([]);
  const [activeFunFacts, setActiveFunFacts] = useState([]);
  const [mapState, setMapState] = useState(mapInitialState);
  const [activeDarkStories, setActiveDarkStories] = useState([]);
  const [activeFlags, setActiveFlags] = useState([]);
  const [activeSlides, setActiveSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(null);
  const [slideNavNumbers, setSlideNavNumbers] = useState(null);
  const [isLocationClickable, setIsLocationClickable] = useState(false);

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
      if (property === "darkStories") setActiveDarkStories(active);
    }
  };

  // Transition effect for map
  const setMapStateWithTransition = (state) => {
    setTimeout(function () {
      setMapState({
        ...mapState,
        ...state,
      });
    }, 100);
  };

  // Getitng slides into local state
  useEffect(() => {
    let tourId = router.query.tourId;
    if (tourId && globalState) {
      let activeSlides = globalState.slides.filter(
        (slide) => slide.tourId == tourId
      );
      let currentSlide = activeSlides[0];
      setActiveSlides(activeSlides);
      setCurrentSlide(currentSlide);

      //   setMapStateWithTransition(mapState);
      //   getAndSetFromGlobalState("locations", locations);
      //   getAndSetFromGlobalState("funFacts", funFacts);
      //   getAndSetFromGlobalState("darkStories", darkStories);
      //   getAndSetFromGlobalState("flags", flags);
    }
  }, [router, globalState]);

  // Utility function to load globalstate data to local state
  const getAndSetFromGlobalState = (property, ids) => {
    let active = [];
    for (let id of ids) {
      let item = globalState[property].find((item) => item.id == id);
      active.push(item);
    }
    if (property === "locations") setActiveLocations(active);
    if (property === "funFacts") setActiveFunFacts(active);
    if (property === "darkStories") setActiveDarkStories(active);
    if (property === "flags") setActiveFlags(active);
  };

  // Next and previous actions
  const moveSlide = (direction) => {
    let currentIndex = activeSlides.indexOf(currentSlide);
    if (direction === "next") setCurrentSlide(activeSlides[currentIndex + 1]);
    if (direction === "previous")
      setCurrentSlide(activeSlides[currentIndex - 1]);
  };

  // Changing states while slide changes
  useEffect(() => {
    if (currentSlide) {
      let { mapState, locations, funFacts, darkStories, flags } = currentSlide;
      setMapStateWithTransition(mapState);
      getAndSetFromGlobalState("locations", locations);
      getAndSetFromGlobalState("funFacts", funFacts);
      getAndSetFromGlobalState("darkStories", darkStories);
      getAndSetFromGlobalState("flags", flags);

      if (currentSlide.type === "stop") {
        setIsLocationClickable(true);
      } else {
        setIsLocationClickable(false);
      }
    }
  }, [currentSlide]);

  // Setting the slide nav numbers
  useEffect(() => {
    if (currentSlide) {
      let slidename = currentSlide.name;
      let slideGroup = activeSlides.filter((slide) => slide.name === slidename);
      let slideCount = slideGroup.length;
      let slideIndex = slideGroup.indexOf(currentSlide) + 1;

      setSlideNavNumbers({
        slideIndex,
        slideCount,
      });
    }
  }, [currentSlide]);

  // useEffect(() => {
  //   console.log(slideNavNumbers);
  // }, [slideNavNumbers]);

  return (
    <div>
      <PageHead />
      <main>
        <Box className={classes.mainView}>
          <Map {...{ mapState }}>
            {/* Rendering locations  */}
            {activeLocations.length > 0 &&
              activeLocations.map((location) => (
                <Location
                  key={uuid()}
                  {...{ location, moveSlide, isLocationClickable }}
                />
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

            {/* Rendering start flag */}
            {activeFlags.length > 0 &&
              activeFlags.map((flag) => <Flag key={uuid()} {...{ flag }} />)}
          </Map>

          {/* Rendering intro slide */}
          {currentSlide && currentSlide.type === "intro" && (
            <IntroSlide slide={currentSlide} {...{ moveSlide }} />
          )}

          {/* Rendering story slide */}
          {currentSlide && slideNavNumbers && currentSlide.type === "story" && (
            <StorySlide
              slide={currentSlide}
              {...{ moveSlide, slideNavNumbers }}
            />
          )}

          {/* Rendering stop slide */}
          {currentSlide && currentSlide.type === "stop" && (
            <StopSlide
              slide={currentSlide}
              {...{ moveSlide, slideNavNumbers }}
            />
          )}

          {/* Rendering stop slide */}
          {currentSlide && currentSlide.type === "end" && (
            <TourEndSlide
              slide={currentSlide}
              {...{ moveSlide, slideNavNumbers }}
            />
          )}

          <BackButton {...{ currentSlide }} />
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
